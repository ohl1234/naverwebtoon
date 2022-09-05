$(function(){
  // u skip event
  $('#u_skip a').keydown(function(e){
    key = e.keyCode;
    if(key === 13){
      const target = $(this).data('target');
      const href = $(this).attr('href');
      
      $('[data-li='+target+']').addClass('active').siblings().removeClass('active');
      $(href).addClass('active').siblings().removeClass('active');

      if($('.group-lnb .lnb-item').eq(1).hasClass('active')){
        $('.group-weekday').addClass('active');
      }else{
        $('.group-weekday').removeClass('active');
      }
    }
  })
  // header scroll event 
  let lastScroll = 0;
  $(window).scroll(function(){

    const curr = $(this).scrollTop();
    const here = $('.container').offset().top;

    if(curr > lastScroll){
      $('.header').addClass('active');
      if($('.group-lnb .lnb-item').eq(1).hasClass('active')){
        $('.header').addClass('active2');
      }
    }
      
    if(curr <= here + 100){
      $('.header').removeClass('active');
      if($('.group-lnb .lnb-item').eq(1).hasClass('active')){
        $('.header').removeClass('active2');
      }
    }
  });

  // nav click
  $('.header .group-lnb .tab-lnb').click(function(e){
      e.preventDefault();

      const href = $(this).attr('href');

      $(href).addClass('active').siblings().removeClass('active');
      $(this).parent().addClass('active').siblings().removeClass('active');

      if($('.group-lnb .lnb-item').eq(1).hasClass('active')){
        $('.group-weekday').addClass('active');
      }else{
        $('.group-weekday').removeClass('active');
      }
  })

  $('.header .group-weekday .link-weekday').click(function(e){
    e.preventDefault();

    $(this).parent().addClass('active').siblings().removeClass('active');
  })

  // footer click
  $('.footer .btn-info').click(function(){
    $('.biz-info-wrap').toggleClass('active');
    $(this).toggleClass('active');
  })

  //category click 
  $('.group-category .btn-tab').click(function(e){
    e.preventDefault();

    $(this).parent().addClass('active').siblings().removeClass('active');
  })
  // swiper slide 
  const swiper1 = new Swiper(".slide1 .swiper", {
      slidesPerView: "auto",
      spaceBetween: 0,
    });
  const swiper2 = new Swiper(".slide2 .swiper", {
      slidesPerView: 'auto',
      spaceBetween: 8,
      loop: true,
      pagination: {
          el: ".fraction1",
          type: "fraction",
        }
    });
  slide3Arr = ['10대여자','10대남자','20대여자','20대남자','30대여자','30대남자']
  const swiper3 = new Swiper(".slide3 .swiper", {
    slidesPerView: "auto",
    spaceBetween: 0,
    pagination: {
      el: ".sc-age .tab-area",
      clickable: true,
      renderBullet: function (index, className) {
          return `<a href="#" class="btn-tab ${className}">${slide3Arr[index]}</a>`;
        }
      }
    });
  const swiper4 = new Swiper(".slide4 .swiper", {
    slidesPerView: "auto",
    spaceBetween: 0,
    loop:true,
    pagination: {
      el: ".fraction2",
      type: "fraction",
    }
  });
  const swiper5 = new Swiper(".slide5 .swiper", {
    slidesPerView: "auto",
    spaceBetween: 0,
    loop:true,
    pagination: {
      el: ".fraction3",
      type: "fraction",
    }
  });
})