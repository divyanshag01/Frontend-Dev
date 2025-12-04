"use strict";
class FormBuilder {
    constructor(fields = []) {
        this.fields = fields;
    }
    // Generate the form
    renderForm() {
        const container = document.getElementById("formContainer");
        let html = `<form id="dynamicForm">`;
        this.fields.forEach(field => {
            html += `
                <label>${field.label}</label>
                <input type="${field.type}" id="${field.label}" /><br><br>
            `;
        });
        html += `<button type="button" id="submitBtn">Submit</button></form>`;
        container.innerHTML = html;
        document.getElementById("submitBtn").addEventListener("click", () => {
            console.log(this.getFormData());
        });
    }
    // Get all form data as an object
    getFormData() {
        const formData = {};
        this.fields.forEach(field => {
            formData[field.label] = document.getElementById(field.label).value;
        });
        return formData;
    }
}
// Example usage
const builder = new FormBuilder([
    { type: "text", label: "Username" },
    { type: "email", label: "Email" },
    { type: "password", label: "Password" }
]);

builder.renderForm();