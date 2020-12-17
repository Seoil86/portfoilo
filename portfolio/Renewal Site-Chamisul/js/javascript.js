var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

function openModal(modalname){
    $('#modal').fadeIn(500);
    $('.' + modalname).fadeIn(500);
}
$('.close, #modal').on('click', function(){
    $('#modal').fadeOut(300);
    $('.modal-con').fadeOut(300);
})

$('.tab-btn li a').click(function(){ // n번 버튼을 클릭했을 때
  $(this).addClass('on'); // n번 버튼 활성화
  $(this).parent().siblings().find('a').removeClass('on'); // n번 버튼을 제외한 나머지 버튼 비활성화
  var $idx = $(this).parent('li').index();
  $('.sub-con > div').eq($idx).css('display','block'); // n번 컨텐츠 활성화
  $('.sub-con > div').eq($idx).siblings().css('display','none'); // n번 컨텐츠 외 나머지 컨텐츠 비활성화

  return false; // a태그 무효화
});

// 처음 창을 열었을 때, 기본으로 세팅되어 있는 경우
$('.tab-btn1').addClass('on');
$('.con1').css('display','block');