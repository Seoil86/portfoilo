// 필름 슬라이드
$(document).ready(function(){
    $(".film-slide").hover(function(){
        	$("ul, .movie").css("animation-play-state","paused");
    },function(){
    		$("ul, .movie").css("animation-play-state","running");
    });
});



// 패럴랙스 스크롤링
var s = skrollr.init();



// 스크린 카운트다운
const number = document.querySelector(".number");
const countdown = 5;
let counter = countdown;
number.innerHTML = counter;

setInterval(() => {
  counter--;
  number.innerHTML = counter;
  if (counter === 0) {
    counter = countdown + 1;
  }
}, 1000);



// 필름 이미지 클릭시 스크린 이미지 모달창
$('.screen-cont > div').css('display', 'none');
$('.screen-cont > div').eq(0).css('display', 'block');

$('.film .film-slide .scene a img').click(function(){
  $(this).addClass('on');
  $(this).parent().siblings().find('img').removeClass('on');
  var $idx = $(this).parent('a').index();
  $('.screen-cont > div').eq($idx-1).css('display','block');
  $('.screen-cont > div').eq($idx-1).siblings().css('display','none');

  return false;
});

$('.screen-cont1').addClass('on');
$('.screen-cont1').css('display','block');