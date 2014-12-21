$(document).ready(function(){
    $(".activateSubListOfCategories").click(function () {
       $(".subListOfCategories").toggle(500);
    });
    $(function () {
       $(".partitionForSearch").ikSelect();
    });
});