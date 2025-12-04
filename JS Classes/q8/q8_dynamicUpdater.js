"use strict";

// Initial user object
let user = {
    name: "John",
    email: "john@mail.com",
    age: 21
};
// Fill form with initial values
window.onload = function () {
    document.getElementById("name").value = user.name;
    document.getElementById("email").value = user.email;
    document.getElementById("age").value = user.age;

    displayUser();
};
// Update object on form submit
function updateUser() {
    user.name = document.getElementById("name").value.trim();
    user.email = document.getElementById("email").value.trim();
    user.age = Number(document.getElementById("age").value);

    displayUser();
}
// Display updated object
function displayUser() {
    document.getElementById("output").innerText = JSON.stringify(user, null, 2);
}