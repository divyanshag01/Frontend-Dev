jq2(document).ready(function () {

    jq2("#notifyBtn").click(function () {
        jq2("#modal").fadeIn();
    });

    jq2("#closeModal").click(function () {
        jq2("#modal").fadeOut();
    });

    jq2("#tooltipBtn").hover(
        function () { jq2(this).css("background", "lightyellow"); },
        function () { jq2(this).css("background", "white"); }
    );

});
