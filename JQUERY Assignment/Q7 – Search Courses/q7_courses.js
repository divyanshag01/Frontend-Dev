$(document).ready(function () {
    $("#searchBox").keyup(function () {
        let text = $(this).val().toLowerCase();
        let matchCount = 0;

        $(".course").each(function () {
            let course = $(this).text().toLowerCase();
            if (course.includes(text)) {
                $(this).show();
                $(this).css("background", "lightyellow");
                matchCount++;
            } else {
                $(this).hide();
            }
        });

        $("#count").text(matchCount);
    });

    $("#clearBtn").click(function () {
        $("#searchBox").val("");
        $(".course").show().css("background", "white");
        $("#count").text("5");
    });
});
