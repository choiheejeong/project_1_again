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

  
 //주요사업
var busi = document.querySelectorAll(".busi_list li");
var bg = document.querySelector(".busi_bg");
var images = [
    "url('img/busi01.jpg')",
    "url('img/busi02.png')",
    "url('img/seed.jpg')",
    "url('img/busi04.jpeg')"
];

busi.forEach(function(item,i){
    item.addEventListener("mouseover",function(){
        bg.style.backgroundImage = images[i];
    });
    
    item.addEventListener("mouseout",function(){
        bg.style.backgroundImage = "url(img/hand.jpg)";
    });
    
});
