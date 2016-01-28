
$(function () {
    $(".calendar").pickmeup({
        flat: true
    });

    $('.ratingArticle').rating({
        image: 'img/ratingStar.png'
    });

    $(".lines_for_mobile").click(function () {
        $(".mainMenu li").toggle(600);
    });

    $(window).resize(function () {
        var doc_weight = $(window).width();

        if (doc_weight > 1050) {
            $(".mainMenu li").css("display", "inline-block");
        } else {
            $(".mainMenu li").css("display", "none");
        }
    })
});
