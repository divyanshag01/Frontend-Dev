const API_URL = 'http://localhost:3006/users';

document.addEventListener('DOMContentLoaded', function() {
    loadExistingUsers();
    
    const form = document.getElementById('registrationForm');
    const emailInput = document.getElementById('email');
    
    // Email validation on blur
    emailInput.addEventListener('blur', function() {
        if (this.value.trim()) {
            checkEmailExists(this.value.trim());
        }
    });
    
    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        handleRegistration();
    });
});

function loadExistingUsers() {
    axios.get(API_URL)
        .then(response => {
            displayExistingUsers(response.data);
        })
        .catch(error => {
            console.error('Error loading users:', error);
        });
}

function displayExistingUsers(users) {
    const usersList = document.getElementById('usersList');
    
    if (users.length === 0) {
        usersList.innerHTML = '<p style="color: #999; text-align: center;">No users registered yet</p>';
        return;
    }
    
    usersList.innerHTML = users.map(user => `
        <div class="user-item">
            <div class="user-name">${user.name}</div>
            <div class="user-email">${user.email}</div>
        </div>
    `).join('');
}

function checkEmailExists(email) {
    const emailError = document.getElementById('emailError');
    const emailInput = document.getElementById('email');
    
    axios.get(API_URL, {
        params: { email: email }
    })
    .then(response => {
        if (response.data.length > 0) {
            // Email exists
            emailError.textContent = '⚠️ Email already registered';
            emailError.classList.add('show');
            emailInput.classList.add('error');
            return true;
        } else {
            // Email available
            emailError.classList.remove('show');
            emailInput.classList.remove('error');
            return false;
        }
    })
    .catch(error => {
        console.error('Error checking email:', error);
        return false;
    });
}

async function handleRegistration() {
    const form = document.getElementById('registrationForm');
    const submitBtn = document.getElementById('submitBtn');
    const messageBox = document.getElementById('messageBox');
    
    const formData = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        phone: document.getElementById('phone').value.trim()
    };
    
    // Validate form
    if (!formData.name || !formData.email || !formData.phone) {
        showMessage('Please fill all fields', 'error');
        return;
    }
    
    // Show loading state
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    
    try {
        // Check if email already exists
        const checkResponse = await axios.get(API_URL, {
            params: { email: formData.email }
        });
        
        if (checkResponse.data.length > 0) {
            showMessage('❌ Email already registered. Please use a different email.', 'error');
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
            
            const emailInput = document.getElementById('email');
            const emailError = document.getElementById('emailError');
            emailError.textContent = '⚠️ Email already registered';
            emailError.classList.add('show');
            emailInput.classList.add('error');
            return;
        }
        
        // Email is available, proceed with registration
        const postResponse = await axios.post(API_URL, formData);
        
        // Success
        showMessage('✅ Registration successful! Welcome aboard!', 'success');
        form.reset();
        
        // Clear any error states
        document.getElementById('emailError').classList.remove('show');
        document.getElementById('email').classList.remove('error');
        
        // Reload existing users list
        loadExistingUsers();
        
    } catch (error) {
        console.error('Error during registration:', error);
        showMessage('❌ Registration failed. Please try again.', 'error');
    } finally {
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
    }
}

function showMessage(message, type) {
    const messageBox = document.getElementById('messageBox');
    messageBox.textContent = message;
    messageBox.className = `message-box ${type} show`;
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        messageBox.classList.remove('show');
    }, 5000);
}
