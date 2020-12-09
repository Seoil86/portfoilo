AOS.init();

$(document).ready(function(){
    $(".popup").click(function(){
        $(".rq").fadeIn();
        return false; //a태그 비활성화
    });
    $(".close, .bg").click(function(){
        $(".rq").fadeOut();
    });

});