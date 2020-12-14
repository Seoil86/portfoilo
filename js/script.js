$(document).ready(function(){
    $(".film-slide").hover(function(){
        	$("ul, .movie").css("animation-play-state","paused");
    },function(){
    		$("ul, .movie").css("animation-play-state","running");
    });
});



var s = skrollr.init();



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





$('.film .film-slide .scene a img').click(function(){ // n번 버튼을 클릭했을 때
$(this).addClass('on'); // n번 버튼 활성화
$(this).parent().siblings().find('img').removeClass('on'); // n번 버튼을 제외한 나머지 버튼 비활성화
var $idx = $(this).parent('a').index();
$('.screen-cont > div').eq($idx).css('display','block'); // n번 컨텐츠 활성화
$('.screen-cont > div').eq($idx).siblings().css('display','none'); // n번 컨텐츠 외 나머지 컨텐츠 비활성화

return false; // a태그 무효화
});

// 처음 창을 열었을 때, 기본으로 세팅되어 있는 경우
$('.screen-cont1').addClass('on');
$('.screen-cont1').css('display','block');