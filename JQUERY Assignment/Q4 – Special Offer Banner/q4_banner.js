$(document).ready(function () {
    let currentIndex = 0;
    $(".banner").hide().eq(0).show();

    $("#hideBtn").click(function () {
        $(".banner").hide();
    });

    $("#showBtn").click(function () {
        $(".banner").show();
    });

    $("#slideToggleBtn").click(function () {
        $(".banner").slideToggle();
    });

    $("#fadeToggleBtn").click(function () {
        $(".banner").fadeToggle();
    });

    setInterval(function () {
        $(".banner").eq(currentIndex).fadeOut();
        currentIndex = (currentIndex + 1) % $(".banner").length;
        $(".banner").eq(currentIndex).fadeIn();
    }, 5000);
});