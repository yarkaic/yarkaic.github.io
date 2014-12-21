$(document).ready(function(){

function mainGalleryOfMiniImage () {


    var gallery = $(".mainGalleryOfMiniImage ul");
    var widthOfAllElemGallery = function () {
        var widths = [];

        $(".mainGalleryOfMiniImage ul li").each(function(){
            widths.push($(this).outerWidth());
        });

        var summ=0,
            i = widths.length;
        while( i-- ) { summ += widths[i] };

        return summ;
    }

    var itemGallery = gallery.find(">li");
    var widthItemGallery = itemGallery.outerWidth();

    return {

        stepLeft: function () {
            var galleryPosition = gallery.position();
            if (galleryPosition.left >= 0) {
                var firstItem = gallery.prepend($(".mainGalleryOfMiniImage ul li:last"));
                firstItem.css("left", -widthItemGallery);
            }
            gallery.animate({left: "+=96"}, 500);    //todo i'm not finish!!!
        },

        stepRight: function () {
            var galleryPosition = gallery.position();
            var endRightPosition = -widthOfAllElemGallery() +6*widthItemGallery;

            if (galleryPosition.left <= endRightPosition) {
                var lastItem = gallery.prepend($(".mainGalleryOfMiniImage ul li:first"));
                lastItem.css("left", +widthItemGallery);
                gallery.css("left", endRightPosition);
            }
            gallery.animate({left: "-=96"}, 500);   //todo i'm not finish!!!
        },

        clickImage: function () {
            var image = $(".mainGalleryImage");
            var imageRel = $(this).attr("rel");

            image.hide().fadeIn("slow");
            image.html("<img src='" + imageRel + "'>");

            return false;
        }

    }
};

    function callTheMainGallery () {

        var throttledLeft = _.throttle (mainGalleryOfMiniImage().stepLeft, 1000);
        var throttledRight = _.throttle (mainGalleryOfMiniImage().stepRight, 1000);

        $(".arrowMainGallery.left").click(throttledLeft);
        $(".arrowMainGallery.right").click(throttledRight);
        $(".mainGalleryOfMiniImage ul li").on( "click", mainGalleryOfMiniImage().clickImage );

    }

    callTheMainGallery();

    function optionalStringGallery() {

        var wrapGallery = $(".optionalStringGallery").outerWidth();
        var gallery = $(".optionalStringGallery ul");
        var widthOfAllElemGallery = function () {
            var widths = [];

            $(".optionalStringGallery ul li").each(function(){
                widths.push($(this).outerWidth());
            });

            var summ=0,
                i = widths.length;
            while( i-- ) { summ += widths[i] };

            return summ;
        }

        var itemGallery = gallery.find(">li");
        var widthItemGallery = itemGallery.outerWidth();

        return {

            stepLeft: function () {
                var galleryPosition = gallery.position();
                if (galleryPosition.left >= -widthItemGallery) {
                    var firstItem = gallery.prepend($(".optionalStringGallery ul li:last"));
                    firstItem.css("left", -widthItemGallery);
                }
                gallery.animate({left: "+=74"}, 500);    //todo i'm not finish!!!
            },

            stepRight: function () {
                var galleryPosition = gallery.position();
                var endRightPosition = -widthOfAllElemGallery() +9*widthItemGallery;

                if (galleryPosition.left <= endRightPosition) {
                    var lastItem = gallery.append($(".optionalStringGallery ul li:first"));
                    lastItem.css("left", +widthItemGallery);
                    gallery.css("left", endRightPosition);
                }
                gallery.animate({left: "-=74"}, 500);   //todo i'm not finish!!!
            }
        }
    };

    function callTheOptionalGallery () {

        var throttledLeft = _.throttle (optionalStringGallery().stepLeft, 1000);
        var throttledRight = _.throttle (optionalStringGallery().stepRight, 1000);

        $(".arrowOptionalGallery.left").click(throttledLeft);
        $(".arrowOptionalGallery.right").click(throttledRight);

    }

    callTheOptionalGallery();

    $(function () {
        $(".ratingArticle").rating({
            image: "img/stars.png"
        });
    });

});
