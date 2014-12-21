$(document).ready(function () {
    $(window).resize(function () {
        if ( $("header .navbar").width() <= 770) {
            $(".forToggleMenu").css("display" , "block");
            $(".mainMenuWrap").css("display" , "none");
        } else {
            $(".forToggleMenu").css("display" , "none");
            $(".mainMenuWrap").css("display" , "block");
        }
    });

    $(".forToggleMenu").click(function () {
        $(".mainMenuWrap").toggle(1500);

    });
});