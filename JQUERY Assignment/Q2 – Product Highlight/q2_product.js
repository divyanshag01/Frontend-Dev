$(document).ready(function () {
    $(".product").click(function () {
        $(this).css("background", "lightyellow");
        if ($(this).data("stock") === "no") alert("This product is OUT OF STOCK!");
    });
    $(".details").hide();
    $(".product").hover(
        function () {
            $(this).find(".details").slideDown();
        },
        function () {
            $(this).find(".details").slideUp();
        }
    );
    $(".fav").click(function (e) {
        e.stopPropagation();
        $(this).toggleClass("selected");
    });
    $("[data-discount]").css("border", "2px solid green");
});