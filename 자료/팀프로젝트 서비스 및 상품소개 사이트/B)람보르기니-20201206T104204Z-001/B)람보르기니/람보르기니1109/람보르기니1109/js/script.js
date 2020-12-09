// --------------------------------- nav - button ---------------------------------
$(function () {

    $('.nav .nav-btn').click(function(){
        if(!($('.nav .nav-bg').hasClass('navOn'))){
            $('.nav .nav-bg').addClass('navOn');
            $('.nav .nav-btn').html("<b>∧</b>");
            $( '.nav .nav-bg' ).slideDown();
        }else {
            $('.nav .nav-bg').removeClass('navOn');
            $('.nav .nav-btn').html("<b>∨</b>");
            $( '.nav .nav-bg' ).slideUp();
        }
    });
});

$(function(){
    var $menu = $('.menu li'),
        $contents = $('section');
    $menu.click(function(e){
            e.preventDefault();
        var idx = $(this).index(); 
        var section= $contents.eq(idx); 
        var sectionDistance = section.offset().top; 
        $('html, body').stop().animate({scrollTop:sectionDistance});
    });

    $(window).scroll(function(){ 
        $contents.each(function(){ 
            if($(this).offset().top <= $(window).scrollTop()) {  
            var idx = $(this).index();
            $menu.removeClass('menuOn');
            $menu.eq(idx).addClass('menuOn');
            } 
        });
    });
});
// ---------------------------------sce01-------------------------------------------

//  주 메뉴 탭버튼 
$('.tab li a').click(function(){
    $(this).addClass('on');
    $(this).parent().siblings().find('a').removeClass('on');
    var $idx = $(this).parent('li').index();
    $('.main-list').eq($idx - 1).siblings().css('display','none');
    $('.main-list').eq($idx - 1).css('display','block');
    return false;
  });
  $('.tab1').addClass('on');
  $('.sub1').css('display','block');
  
  
  
  // Logo메뉴 탭버튼
  $('.tab-btn li a').click(function(){
      $(this).addClass('on');
      $(this).parent().siblings().find('a').removeClass('on');
      var $idx = $(this).parent('li').index();
      $('.sub-con > img').eq($idx).css('display','block');
      $('.sub-con > img').eq($idx).siblings().css('display','none');
      $('.sub-con > ul').eq($idx).css('display','block');
      $('.sub-con > ul').eq($idx).siblings().css('display','none');
      return false;
    });
    $('.tab-btn1').addClass('on');
    $('.con1').css('display','block');
  
    $('.tab-btn li a').click(function(){
      $(this).addClass('on');
      $(this).parent().siblings().find('a').removeClass('on');
      var $idx = $(this).parent('li').index();
      $('.logo2 > img').eq($idx).css('display','block');
      $('.logo2 > img').eq($idx).siblings().css('display','none');
      return false;
    });
    $('.tab-btn1').addClass('on');
    $('.con1').css('display','block');
  
    $('.tab-btn li a').click(function(){
      $(this).addClass('on');
      $(this).parent().siblings().find('a').removeClass('on');
      var $idx = $(this).parent('li').index();
      $('.logo3 > img').eq($idx).css('display','block');
      $('.logo3 > img').eq($idx).siblings().css('display','none');
      return false;
    });
    $('.tab-btn1').addClass('on');
    $('.con1').css('display','block');
    
  
  
  // History메뉴 탭버튼
    $('.tab-btn-2 > ul > li > a').click(function(){
      $(this).addClass('on');
      $(this).parent().siblings().find('a').removeClass('on');
      var $idx = $(this).parent('li').index();
      $('.sub-con-2 > img').eq($idx).css('display','block');
      $('.sub-con-2 > img').eq($idx).siblings().css('display','none');
      $('.sub-con-2 > ul').eq($idx).css('display','block');
      $('.sub-con-2 > ul').eq($idx).siblings().css('display','none');
      return false;
    });
  
    $('.tab-btn-2 > ul > li > a').click(function(){
      $(this).addClass('on');
      $(this).parent().siblings().find('a').removeClass('on');
      var $idx = $(this).parent('li').index();
      $('.history2 > img').eq($idx).css('display','block');
      $('.history2 > img').eq($idx).siblings().css('display','none');
      return false;
    });
  
    $('.tab-btn-2 > ul > li > a').click(function(){
      $(this).addClass('on');
      $(this).parent().siblings().find('a').removeClass('on');
      var $idx = $(this).parent('li').index();
      $('.history3 > img').eq($idx).css('display','block');
      $('.history3 > img').eq($idx).siblings().css('display','none');
      return false;
    });






// ---------------------------------sce02, 3-------------------------------------------


$(function(){
    // 컬러변경버튼 클릭 시 버튼별 색상 활성화
    $('.color_bt').on('click',function(){
        $(this).addClass('bton');
        $(this).siblings().removeClass('bton');

        var $curIdx = $('.color_bt').index(this);
        $('.color_change li').eq($curIdx).fadeIn().addClass('bton');
        $('.color_change li').eq($curIdx).siblings().removeClass('bton').fadeOut();
   });
   new Swiper( '.swiper-container', {

    effect : 'fade',
    loop : true, // 무한 반복
	navigation : { // 네비게이션 설정
		nextEl : '.swiper-button-next', // 다음 버튼 클래스명
		prevEl : '.swiper-button-prev', // 이번 버튼 클래스명
    },
    });

    // 디테일 버튼 클릭 시 사진 활성화 
    $('#sec03 .hex_bt').on('click',function(){
        $('.ex_sub_img').addClass('active');
    });

    $('#sec03 .hex_bt').on('click', function(){
        if($(this).hasClass('bt_on')){ 
            $('#sec03 .hex_bt').removeClass('bt_on');
            $('.ex_sub_img').removeClass('active');
        }else{
            $('#sec03 .hex_bt').addClass('bt_on');
            $('.ex_sub_img').addClass('active');
        } 
        return false;
    });
});




// ---------------------------------sce04-------------------------------------------

$(".tab_content").hide();
$(".tab_content:first").show();

    /* if in tab mode */
$("ul.tabs li").click(function() {
 
$(".tab_content").hide();
var activeTab = $(this).attr("rel"); 
$("#"+activeTab).fadeIn();		
 
$("ul.tabs li").removeClass("active");
$(this).addClass("active");

$(".tab_drawer_heading").removeClass("d_active");
$(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");

});
    /* if in drawer mode */
$(".tab_drawer_heading").click(function() {

$(".tab_content").hide();
var d_activeTab = $(this).attr("rel"); 
$("#"+d_activeTab).fadeIn();

$(".tab_drawer_heading").removeClass("d_active");
$(this).addClass("d_active");

$("ul.tabs li").removeClass("active");
$("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
});



$('ul.tabs li').last().addClass("tab_last");


// ---------------------------------sce05-------------------------------------------
// '+' button
$(function () {

    $('.tit-02 .button').click(function(){
        if(!($('.tit-02 .button').hasClass('on'))){
            $('.tit-02 .button').addClass('on');
            $('.tit-02 a').html("<b>×</b>");
            $( '#sec05-spc-wrap' ).slideDown();
            var offset = $('#sec05-spc-wrap').offset();
            $('html').animate({scrollTop : offset.top}, 400);
        }else {
            $('.tit-02 .button').removeClass('on');
            $('.tit-02 a').html("<b>+</b>");
            $( '#sec05-spc-wrap' ).slideUp();
        }
    });
 });

// sec05-spc-wrap 

var $length = $('.gallery li').length;

    $('.gallery li').click(function(){
        var $currentImg = $(this).index();
        var $srcImg = $(this).find('img').attr('src');
        var $altImg = $(this).find('img').attr('alt');

        $('.sec05-spc-pop').show();
        $('.sec05-spc-pop .cont li').eq($currentImg).fadeIn().addClass('visible');
        $('.sec05-spc-pop .cont li').eq($currentImg).find('img').attr('src', $srcImg);
        $('.sec05-spc-pop .cont li').eq($currentImg).find('h2').text($altImg);
        $('.sec05-spc-pop .bg').fadeIn();

    });

    $('.sec05-spc-pop .bg').click(function(){
        $('.sec05-spc-pop').fadeOut();
        $('.sec05-spc-pop .cont li').fadeOut();
        $('.sec05-spc-pop .cont li').removeClass('visible');
        $('.sec05-spc-pop .bg').fadeOut();
    });

    

    

    $(document).ready(function() {
        $(document).scrollTop(100);
    });
















