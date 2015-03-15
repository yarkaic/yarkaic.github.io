$(document).ready(function(){

    function slider() {
        var wrapThumb = $(".wrapThumb");
        var wrapThumbPosition = wrapThumb.position().left;
        var wrapThumbWidth = wrapThumb.width();
        var thumb = $(".wrapThumb .thumb");
        var thumbPosition = thumb.position().left;
        var position1 = -wrapThumbWidth*0.009;
        var position1_1 = 0;
        var position1_2 = wrapThumbWidth*0.08;
        var position2 = wrapThumbWidth*0.182;
        var position2_1 = wrapThumbWidth*0.16;
        var position2_2 = wrapThumbWidth*0.22;
        var position3 = wrapThumbWidth*0.482;
        var position3_1 = wrapThumbWidth*0.46;
        var position3_2 = wrapThumbWidth*0.52;
        var position4 = wrapThumbWidth*0.985;
        var position4_1 = wrapThumbWidth*0.95;
        var position4_2 = wrapThumbWidth;

        wrapThumb.click(function(e){
            var coordsClick = e.pageX - this.offsetLeft;

            if (position1_1 < coordsClick && coordsClick < position1_2) {
                thumb.animate({left: position1}, 2000);
            } else if (position2_1 < coordsClick && coordsClick < position2_2) {
                thumb.animate({left: position2}, 2000)
            } else if (position3_1 < coordsClick && coordsClick < position3_2) {
                thumb.animate({left: position3}, 2000);
            } else if (position4_1 < coordsClick && coordsClick < position4_2) {
                thumb.animate({left: position4}, 2000)
            }
        });




/*

        thumb.click(function(){

            $(".thumb").animate({left: "+=100" }, 1700);
        });
*/

    }
    slider();

/*
    function slider2(container, options) {
        var $container = $(container);


    }



    slider2 (".wrapThumb",
        [{label:'Не владею'}, {label: "fdsd", step: '20%'}]
    );
*/

});

