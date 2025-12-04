$(document).ready(function () {

    let usedEmails = ["test@mail.com", "hello@mail.com"];

    $("#submitBtn").click(function () {
        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let pass = $("#password").val();

        let valid = true;

        if (name === "") {
            $("#name").css("border", "2px solid red");
            valid = false;
        } else {
            $("#name").css("border", "1px solid black");
        }

        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email) || usedEmails.includes(email)) {
            $("#email").css("border", "2px solid red");
            valid = false;
        } else {
            $("#email").css("border", "1px solid black");
        }

        if (pass.length < 8) {
            $("#password").css("border", "2px solid red");
            valid = false;
        } else {
            $("#password").css("border", "1px solid black");
        }

        if (valid) {
            $("#successMsg").text("Registration Successful!");
        } else {
            $("#successMsg").text("");
        }
    });

});
