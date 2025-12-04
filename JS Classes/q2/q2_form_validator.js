"use strict";
document.getElementById("studentForm").addEventListener("submit", function (e) {
    e.preventDefault();
    validateName();
    validateEmail();
    validatePhone();
    validatePassword();
});
function setValidation(input, errorElement, message, isValid) {
    if (isValid) {
        input.classList.remove("invalid");
        input.classList.add("valid");
        errorElement.textContent = "";
    } else {
        input.classList.remove("valid");
        input.classList.add("invalid");
        errorElement.textContent = message;
    }
}
// ------------------ VALIDATOR FUNCTIONS -------------------
function validateName() {
    const nameInput = document.getElementById("name");
    const error = document.getElementById("nameError");
    const regex = /^[A-Za-z ]+$/;
    const isValid = regex.test(nameInput.value);
    setValidation(nameInput, error, "Name should contain only alphabets", isValid);
}
function validateEmail() {
    const emailInput = document.getElementById("email");
    const error = document.getElementById("emailError");
    const regex = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    const isValid = regex.test(emailInput.value);
    setValidation(emailInput, error, "Enter a valid email (example@domain.com)", isValid);
}
function validatePhone() {
    const phoneInput = document.getElementById("phone");
    const error = document.getElementById("phoneError");
    const regex = /^[0-9]{10}$/; // exactly 10 digits
    const isValid = regex.test(phoneInput.value);
    setValidation(phoneInput, error, "Phone must be exactly 10 digits", isValid);
}
function validatePassword() {
    const passInput = document.getElementById("password");
    const error = document.getElementById("passwordError");
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).+$/;
    const isValid = regex.test(passInput.value);
    setValidation(passInput, error, "Must contain uppercase, number & special char", isValid);
}