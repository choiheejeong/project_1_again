//ScrollGiveClass 플러그인 호출
var sgc1 = new ScrollGiveClass("header",{
    baseline:100
});

//뉴스 슬라이드
const swiper1 = new Swiper('.news_slide .swiper', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 57,

    // Navigation arrows
    navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },

  });

  