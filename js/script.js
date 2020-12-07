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


