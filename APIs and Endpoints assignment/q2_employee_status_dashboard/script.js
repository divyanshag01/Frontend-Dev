const API_URL = 'http://localhost:3002/employees';

// Load employees on page load
document.addEventListener('DOMContentLoaded', function() {
    loadEmployees();
});

function loadEmployees() {
    const xhr = new XMLHttpRequest();
    
    xhr.open('GET', API_URL, true);
    
    xhr.onload = function() {
        if (xhr.status === 200) {
            const employees = JSON.parse(xhr.responseText);
            displayEmployees(employees);
            updateStats(employees);
        } else {
            showError('Failed to load employees. Please ensure JSON Server is running on port 3002.');
        }
    };
    
    xhr.onerror = function() {
        showError('Network error. Please check your connection and ensure JSON Server is running.');
    };
    
    xhr.send();
}

function displayEmployees(employees) {
    const employeeList = document.getElementById('employeeList');
    employeeList.innerHTML = '';
    
    employees.forEach(employee => {
        const employeeRow = document.createElement('div');
        employeeRow.className = 'employee-row';
        employeeRow.innerHTML = `
            <div class="employee-info">
                <div class="employee-name">${employee.name}</div>
                <div class="employee-details">${employee.role} • ${employee.department}</div>
            </div>
            <div class="employee-status">
                <span class="status-badge ${employee.status}">${employee.status}</span>
                <div class="toggle-switch ${employee.status}" 
                     data-id="${employee.id}" 
                     data-status="${employee.status}"
                     onclick="toggleStatus(${employee.id}, '${employee.status}', this)">
                </div>
            </div>
        `;
        employeeList.appendChild(employeeRow);
    });
}

function updateStats(employees) {
    const activeCount = employees.filter(emp => emp.status === 'active').length;
    const inactiveCount = employees.filter(emp => emp.status === 'inactive').length;
    
    document.getElementById('activeCount').textContent = activeCount;
    document.getElementById('inactiveCount').textContent = inactiveCount;
}

function toggleStatus(employeeId, currentStatus, toggleElement) {
    // Prevent multiple clicks
    if (toggleElement.classList.contains('disabled')) {
        return;
    }
    
    // Disable toggle during request
    toggleElement.classList.add('disabled');
    
    const newStatus = currentStatus === 'active' ? 'inactive' : 'active';
    const previousStatus = currentStatus;
    
    // Optimistically update UI
    updateUIStatus(toggleElement, newStatus);
    
    // Send PATCH request
    const xhr = new XMLHttpRequest();
    xhr.open('PATCH', `${API_URL}/${employeeId}`, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    
    xhr.onload = function() {
        if (xhr.status === 200) {
            // Success - reload to update stats
            loadEmployees();
            hideError();
        } else {
            // Failed - revert UI
            updateUIStatus(toggleElement, previousStatus);
            showError('Failed to update employee status. Please try again.');
            toggleElement.classList.remove('disabled');
        }
    };
    
    xhr.onerror = function() {
        // Network error - revert UI
        updateUIStatus(toggleElement, previousStatus);
        showError('Network error. Failed to update status. Please check your connection.');
        toggleElement.classList.remove('disabled');
    };
    
    xhr.send(JSON.stringify({ status: newStatus }));
}

function updateUIStatus(toggleElement, newStatus) {
    const employeeRow = toggleElement.closest('.employee-row');
    const statusBadge = employeeRow.querySelector('.status-badge');
    
    // Update toggle switch
    toggleElement.className = `toggle-switch ${newStatus}`;
    toggleElement.setAttribute('data-status', newStatus);
    
    // Update status badge
    statusBadge.className = `status-badge ${newStatus}`;
    statusBadge.textContent = newStatus;
}

function showError(message) {
    const errorDiv = document.getElementById('errorMessage');
    errorDiv.textContent = message;
    errorDiv.classList.add('show');
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        hideError();
    }, 5000);
}

function hideError() {
    const errorDiv = document.getElementById('errorMessage');
    errorDiv.classList.remove('show');
}
