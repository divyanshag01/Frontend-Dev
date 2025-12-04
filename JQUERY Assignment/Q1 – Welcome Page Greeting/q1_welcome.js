$(document).ready(function () {
    let hour = new Date().getHours();
    let greet = "";
    if (hour < 12) greet = "Good Morning!";
    else if (hour < 18) greet = "Good Afternoon!";
    else greet = "Good Evening!";
    $("#mainGreeting").text(greet);
    $("#changeGreetingBtn").click(function () {
        $("#mainGreeting").text("Believe in yourself! You are unstoppable!");
    });
    $("#toggleMsgBtn").click(function () {
        $("#welcomeMsg").toggle();
    });
    $("#mainGreeting").click(function () {
        alert("Greeting clicked!");
    });
    
});