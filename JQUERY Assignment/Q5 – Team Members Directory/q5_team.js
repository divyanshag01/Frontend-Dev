$(document).ready(function () {
    $(".contact").hide();

    $(".manager").click(function () {
        $(this).next(".team").children().css("background", "lightgreen");
    });

    $(".employee").hover(
        function () { $(this).children(".contact").show(); },
        function () { $(this).children(".contact").hide(); }
    );

    $(".deptTitle").click(function () {
        $(this).parent().children().css("background", "lightblue");
    });

    $("#randomBtn").click(function () {
        let employees = $(".employee");
        let random = Math.floor(Math.random() * employees.length);
        let selected = employees.eq(random);
        selected.siblings().css("background", "yellow");
    });

    $("#toggleTeamsBtn").click(function () {
        $(".department").find(".team").slideToggle();
    });
});
