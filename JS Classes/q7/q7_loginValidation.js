"use strict";
function validateLogin() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    // RegExp Rules
    const usernameReg = /^.{5,}$/;  
    const passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    // Error handling
    if (!usernameReg.test(username)) {
        showMessage(" Username must be at least 5 characters.");
        return;
    }
    if (!passwordReg.test(password)) {
        showMessage(
            ` Password must contain:<br>
             • Minimum 8 characters<br>
             • At least 1 uppercase<br>
             • At least 1 lowercase<br>
             • At least 1 number<br>
             • At least 1 special character`
        );
        return;
    }
    // Success message
    showMessage(" Login Successful!", true);
}

function showMessage(msg, success = false) {
    const msgBox = document.getElementById("message");
    msgBox.style.color = success ? "green" : "red";
    msgBox.innerHTML = msg;
}