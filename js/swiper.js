var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: {
        invert: true,
    },
    mousewheelControl:true,
    speed:600,
  });

  function go1(){
    swiper.slideTo(0,600,false)
  }
  function go2(){
    swiper.slideTo(1,600,false)
  }
  function go3(){
    swiper.slideTo(2,800,false)
  }
  function go9(){
    swiper.slideTo(8,1600,false)
  }
