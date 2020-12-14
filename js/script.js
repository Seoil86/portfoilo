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
