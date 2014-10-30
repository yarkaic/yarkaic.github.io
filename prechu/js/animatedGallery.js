// method one  ======================================
/*
$(document).ready(function(){

    var movableObject = $(".wrap ul");
    var widthObject = $(".wrap ul").outerWidth();

    $(".arrowLeft").click(function() {
        var objectPosition = $(".wrap ul").position();

        if (objectPosition.left > 0) {
            movableObject.animate({left:"-1600"}, 1500);
        } else {
            movableObject.animate({left:"+=400"}, 300, function() {
            });

        }


    });

    $(".arrowRight").click(function() {
        var objectPosition = $(".wrap ul").position();

        if (objectPosition.left <= -widthObject+400) {
            movableObject.css("left",0);
        } else {
            movableObject.animate({left:"-=400"}, 300, function() {
            });
        }

    });


});
 */


// method two    ===========================
/*
$(document).ready(function(){

//$(".sourceBlock2").prepend("<li></li>");
  // найти существующий элемент на голом яваскрипте и поставить его перед предыдущим элементом
$(".activateMove").click(function () {
    //$(".sourceBlock2:first").prepend($(".sourceBlock2 li:last"));
    $(".sourceBlock2:last").append($(".sourceBlock2 li:first"));

})

});
 */


// method three   ============================
/*
document.getElementsByClassName("activateMove")[0].onclick = function() {
var chamberOfPatient = document.getElementsByClassName("sourceBlock2")[0];
var patient = chamberOfPatient.children[1];

chamberOfPatient.insertBefore(patient, chamberOfPatient.firstChild);
};

*/

// methods summa =================================
/*
$(document).ready(function(){

    var movableObject = $(".wrap ul");
    var widthObject = $(".wrap ul").outerWidth();

    $(".arrowLeft").click(function() {
        var objectPosition = $(".wrap ul").position();

        if (objectPosition.left >= 0) {
            movableObject.animate({left:"-1600"}, 1500);
        } else {
            movableObject.animate({left:"+=400"}, 300, function() {
            });

        }


    });

    $(".arrowRight").click(function() {
        var objectPosition = $(".wrap ul").position();

        if (objectPosition.left <= -widthObject+400) {
            setTimeout(function () {
                $(".wrap ul:last").append($(".wrap ul li:first"));
            }, 400);

            movableObject.fadeOut();
            movableObject.fadeIn();

        } else {
           movableObject.animate({left:"-=400"}, 300, function() {
            });

        }

    });


});
*/

// methods summa 2 =================================

 $(document).ready(function(){

 var movableObject = $(".wrap ul");

 $(".arrowLeft").click(function() {

     setTimeout(function () {
         $(".wrap ul:first").prepend($(".wrap ul li:last"));
     }, 400);
     movableObject.fadeOut();
     movableObject.fadeIn();

 });

 $(".arrowRight").click(function() {

     setTimeout(function () {
 $(".wrap ul:last").append($(".wrap ul li:first"));
     }, 400);
 movableObject.fadeOut();
 movableObject.fadeIn();

 });

 });



