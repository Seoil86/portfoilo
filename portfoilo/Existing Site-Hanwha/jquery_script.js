$(function(){

    // 무한히 반복되며 껐다 켜지는 로고
    setInterval(function(){
        var delayTime = 4000;
        // 로고1은 끄고 로고2은 켜고
        $(".logo2").delay(delayTime).animate({"opacity":"1"}, 1000);
        $(".logo1").delay(delayTime).animate({"opacity":"0"}, 1000);

        // 로고2은 끄고 로고1은 켜고
        $(".logo1").delay(delayTime).animate({"opacity":"1"}, 1000);
        $(".logo2").delay(delayTime).animate({"opacity":"0"}, 1000);
    });


    // 서브메뉴 보이기
    $(".mainNav>li").mouseenter(function(){
        $(".container").css("overflow","visible");
        $("header").animate({"height":"300px"}, 1000);
    });
    $("header").mouseleave(function(){
        $("header").animate({"height":"80px"}, 1000, function(){
            $(".container").css("overflow","hidden");
        });
    });

    $('.ft-fam').on('click',function(){
        if($(this).hasClass('on')){
            $('.ft-fam').removeClass('on');
            $('.ft-fam-list').slideUp();
        } else{
            $('.ft-fam').addClass('on');
            $('.ft-fam-list').slideDown();
        }
        return false;
    });


});