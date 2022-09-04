$(function(){
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
})