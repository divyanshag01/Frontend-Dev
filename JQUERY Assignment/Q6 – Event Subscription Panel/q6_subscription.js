$(document).ready(function () {
    let notificationsEnabled = false;

    $("#subBtn").click(function () {
        notificationsEnabled = true;
        $("#message").text("Subscribed successfully!");
    });

    $("#unsubBtn").click(function () {
        notificationsEnabled = false;
        $("#message").text("Unsubscribed successfully!");
    });

    $("#topics").on("click", ".topic", function () {
        if (notificationsEnabled) $("#message").text($(this).text() + " notifications enabled");
    });

    $("#addTopicBtn").click(function () {
        let newTopic = $("#newTopic").val();
        if (newTopic !== "") {
            $("#topics").append("<li class='topic'>" + newTopic + "</li>");
            $("#newTopic").val("");
        }
    });

    $("#removeTopicBtn").click(function () {
        $("#topics .topic").last().off("click").remove();
        $("#message").text("Topic removed");
    });
});