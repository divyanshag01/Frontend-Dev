const API_URL = 'http://localhost:3005/timetable';

document.addEventListener('DOMContentLoaded', function() {
    // Set default day to Monday
    const daySelector = document.getElementById('daySelector');
    loadTimetable(daySelector.value);
    
    // Add change event listener
    daySelector.addEventListener('change', function() {
        loadTimetable(this.value);
    });
});

function loadTimetable(day) {
    const container = document.getElementById('timetableContainer');
    
    // Show loading state
    container.innerHTML = '<div class="no-classes"><div class="no-classes-icon">⏳</div><h2>Loading...</h2></div>';
    
    // Fetch timetable for selected day
    fetch(`${API_URL}?day=${day}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch timetable');
            }
            return response.json();
        })
        .then(classes => {
            displayTimetable(day, classes);
        })
        .catch(error => {
            console.error('Error loading timetable:', error);
            showError();
        });
}

function displayTimetable(day, classes) {
    const container = document.getElementById('timetableContainer');
    
    if (classes.length === 0) {
        container.innerHTML = `
            <div class="no-classes">
                <div class="no-classes-icon">🎉</div>
                <h2>No classes today</h2>
                <p>Enjoy your free day!</p>
            </div>
        `;
        return;
    }
    
    // Sort classes by time
    classes.sort((a, b) => {
        const timeA = a.time.split(' - ')[0];
        const timeB = b.time.split(' - ')[0];
        return timeA.localeCompare(timeB);
    });
    
    let html = `
        <div class="day-header">
            <div class="day-name">${day}</div>
            <div class="day-date">${classes.length} ${classes.length === 1 ? 'class' : 'classes'} scheduled</div>
        </div>
        <div class="class-list">
    `;
    
    classes.forEach(classItem => {
        html += `
            <div class="class-card">
                <div class="class-header">
                    <div class="subject-name">${classItem.subject}</div>
                    <div class="class-time">⏰ ${classItem.time}</div>
                </div>
                <div class="class-details">
                    <div class="detail-item">
                        <span class="detail-icon">👨‍🏫</span>
                        <span>${classItem.faculty}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-icon">🚪</span>
                        <span>${classItem.room}</span>
                    </div>
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    container.innerHTML = html;
}

function showError() {
    const container = document.getElementById('timetableContainer');
    container.innerHTML = `
        <div class="no-classes">
            <div class="no-classes-icon">⚠️</div>
            <h2>Error loading timetable</h2>
            <p>Please ensure JSON Server is running on port 3005</p>
        </div>
    `;
}
