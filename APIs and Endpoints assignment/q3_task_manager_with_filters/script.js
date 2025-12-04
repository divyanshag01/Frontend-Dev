$(document).ready(function() {
    const API_URL = 'http://localhost:3003/tasks';

    // Load all tasks initially
    loadTasks();

    // Filter change event
    $('#priorityFilter').on('change', function() {
        const filterValue = $(this).val();
        loadTasks(filterValue);
    });

    function loadTasks(filter = '') {
        let url = API_URL;
        let params = {};

        if (filter === 'completed') {
            params.completed = true;
        } else if (filter) {
            params.priority = filter;
        }

        $.ajax({
            url: url,
            method: 'GET',
            data: params,
            success: function(tasks) {
                displayTasks(tasks);
                updateStats();
            },
            error: function(error) {
                console.error('Error loading tasks:', error);
                showError();
            }
        });
    }

    function displayTasks(tasks) {
        const taskList = $('#taskList');
        taskList.empty();

        if (tasks.length === 0) {
            taskList.html(`
                <div class="no-tasks">
                    <div class="no-tasks-icon">📋</div>
                    <h3>No tasks found</h3>
                    <p>Try changing the filter or add new tasks</p>
                </div>
            `);
            return;
        }

        tasks.forEach(function(task) {
            const taskItem = `
                <div class="task-item ${task.completed ? 'completed' : ''}" data-id="${task.id}">
                    <input type="checkbox" 
                           class="task-checkbox" 
                           ${task.completed ? 'checked' : ''}
                           data-id="${task.id}"
                           data-completed="${task.completed}">
                    <div class="task-content">
                        <div class="task-title">${task.title}</div>
                        <span class="task-priority priority-${task.priority}">${task.priority}</span>
                    </div>
                </div>
            `;
            taskList.append(taskItem);
        });

        // Add checkbox event listeners
        $('.task-checkbox').on('change', function() {
            const taskId = $(this).data('id');
            const currentCompleted = $(this).data('completed');
            const newCompleted = !currentCompleted;
            toggleTaskCompletion(taskId, newCompleted, $(this));
        });
    }

    function toggleTaskCompletion(taskId, completed, checkbox) {
        // Disable checkbox during request
        checkbox.prop('disabled', true);

        $.ajax({
            url: `${API_URL}/${taskId}`,
            method: 'PATCH',
            contentType: 'application/json',
            data: JSON.stringify({ completed: completed }),
            success: function(response) {
                // Update UI
                const taskItem = checkbox.closest('.task-item');
                if (completed) {
                    taskItem.addClass('completed');
                } else {
                    taskItem.removeClass('completed');
                }
                checkbox.data('completed', completed);
                checkbox.prop('disabled', false);
                
                // Update stats
                updateStats();
            },
            error: function(error) {
                console.error('Error updating task:', error);
                // Revert checkbox
                checkbox.prop('checked', !completed);
                checkbox.prop('disabled', false);
                alert('Failed to update task. Please try again.');
            }
        });
    }

    function updateStats() {
        $.ajax({
            url: API_URL,
            method: 'GET',
            success: function(tasks) {
                const totalTasks = tasks.length;
                const completedTasks = tasks.filter(task => task.completed).length;
                
                $('#totalTasks').text(totalTasks);
                $('#completedTasks').text(completedTasks);
            },
            error: function(error) {
                console.error('Error updating stats:', error);
            }
        });
    }

    function showError() {
        $('#taskList').html(`
            <div class="no-tasks">
                <div class="no-tasks-icon">⚠️</div>
                <h3>Error loading tasks</h3>
                <p>Please ensure JSON Server is running on port 3003</p>
            </div>
        `);
    }
});
