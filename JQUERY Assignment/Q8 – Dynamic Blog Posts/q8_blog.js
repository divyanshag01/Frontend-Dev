$(document).ready(function () {

    $("#addPost").click(function () {
        let text = $("#postText").val();
        if (text !== "") $("#posts").append("<div class='post'>" + text + "</div>");
    });

    $("#addFeatured").click(function () {
        $("#posts").prepend("<div class='post'>🔥 Featured Post</div>");
    });

    $("#removeLast").click(function () {
        $("#posts .post").last().remove();
    });

    $("#posts").on("click", ".post", function () {
        $(this).before("<span class='tag'>[Tag]</span>");
        $(this).after("<span class='tag'>[/Tag]</span>");
    });

    $("#postText").keyup(function () {
        let keyword = $(this).val().toLowerCase();
        $(".post").each(function () {
            let text = $(this).text().toLowerCase();
            if (text.includes(keyword)) $(this).css("background", "lightgreen");
            else $(this).css("background", "white");
        });
    });

});