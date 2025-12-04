jq1(document).ready(function () {
    let index = 0;
    let slides = jq1(".slide");

    setInterval(function () {
        slides.removeClass("active").hide();
        index = (index + 1) % slides.length;
        slides.eq(index).addClass("active").show();
    }, 2000);

    jq1(".widget").click(function () {
        jq1(".widget").css("background", "white");
        jq1(this).css("background", "lightgreen");
    });
});
