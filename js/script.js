//ScrollGiveClass 플러그인 호출
var sgc1 = new ScrollGiveClass("header",{
    baseline:100
});

//뉴스 슬라이드
const swiper1 = new Swiper('.news_slide .swiper', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 61,

    // Navigation arrows
    navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },

  breakpoints:{
    1600:{slidesPerView:2, spaceBetween:35},
  }

  });


//팝업 슬라이드
const swiper2 = new Swiper('.banner', {
    loop:true,
    spaceBetween: 50,
    autoplay: { 
        delay: 2500,
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
    
    
});


//블로그
const swiper3 = new Swiper('.blog_banner', {
    loop:true,

    navigation: {
        nextEl: '.b_next',
        prevEl: '.b_prev',
      },
});


//유튜브
const swiper4 = new Swiper('.youtube', {
    direction: 'vertical',
    loop:true,
    autoplay: { 
        delay: 3000,
    },

    navigation: {
        nextEl: '.y_next',
        prevEl: '.y_prev',
      },
});



/*EzenScroll 플러그인 호출*/
let goTop = new EzenScroll(".gotoTop");