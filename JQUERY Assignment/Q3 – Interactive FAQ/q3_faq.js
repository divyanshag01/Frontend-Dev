$(document).ready(function () {
    $(".answer").hide();

    $(".question").click(function () {
        $(this).next(".answer").toggle();
    });

    $(".question").hover(
        function () { $(this).css("color", "blue"); },
        function () { $(this).css("color", "black"); }
    );

    $(".question").dblclick(function () {
        $(".answer").hide();
    });

    $(".faqInput").focus(function () {
        $(this).closest(".faq").css("background", "lightyellow");
    });

    $(".faqInput").blur(function () {
        $(this).closest(".faq").css("background", "white");
    });
});
