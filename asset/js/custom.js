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

  // home json 비동기
  fetch("./asset/data/home.json") //
  .then((response) => response.json())
  .then((json) => {

      const topTen = json.topTen;
      const topTen2 = json.topTen2;
      const bestTen = json.bestTen;
      const bestTen2 = json.bestTen2;
      const bannerSlide = json.bannerSlide;
      const femaleAge10 = json.femaleAge10;
      const maleAge10 = json.maleAge10;
      const femaleAge20 = json.femaleAge20;
      const femaleAge30 = json.femaleAge30;
      const maleAge30 = json.maleAge30;
      const collection1 = json.collection1;
      const collection2 = json.collection2;

      const upEl= `<i class="ic-up"><span class="blind">up</span></i>`;
      const cuttoonEl = `<i class="ic-cuttoon"><span class="blind">컷툰</span></i>`;

      
      let html = '';
      let html2 = '';
      let html3 = '';
      let html4 = '';
      let html5 = '';
      let html6 = '';
      let html7 = '';
      let html8 = '';
      let html9 = '';
      let html10 = '';
      let html11 = '';
      let html12 = '';
      topTen.forEach(el => {
        const isUp = el.up ? upEl : "";
        const isCuttoon = el.cuttoon ? cuttoonEl : "";

          html+=`<li class="webtoon-item">
                    <a href="${el.url}" class="link-webtoon">
                        <div class="thumbnail">
                            <img src="${el.imgSrc}" alt="${el.alt}">
                        </div>
                        <div class="info-box">
                            <em class="ranking-num">${el.num}</em>
                            <div class="webtoon-info">
                                <strong class="webtoon-tit">
                                    ${el.title}
                                    <em class="badge">
                                      ${isUp}
                                      ${isCuttoon}
                                    </em>
                                </strong>
                                <p class="desc">${el.desc}</p>
                            </div>
                        </div>
                    </a>
                  </li>`
      });
      topTen2.forEach(el => {
        const isUp = el.up ? upEl : "";
        const isCuttoon = el.cuttoon ? cuttoonEl : "";

          html2+=`<li class="webtoon-item">
                    <a href="${el.url}" class="link-webtoon">
                        <div class="thumbnail">
                            <img src="${el.imgSrc}" alt="${el.alt}">
                        </div>
                        <div class="info-box">
                            <em class="ranking-num">${el.num}</em>
                            <div class="webtoon-info">
                                <strong class="webtoon-tit">
                                    ${el.title}
                                    <em class="badge">
                                      ${isUp}
                                      ${isCuttoon}
                                    </em>
                                </strong>
                                <p class="desc">${el.desc}</p>
                            </div>
                        </div>
                    </a>
                  </li>`
      });
      bestTen.forEach(el => {
        const isUp = el.up ? upEl : "";
        const isCuttoon = el.cuttoon ? cuttoonEl : "";

          html3+=`<li class="webtoon-item">
                    <a href="${el.url}" class="link-webtoon">
                        <div class="thumbnail">
                            <img src="${el.imgSrc}" alt="${el.alt}">
                        </div>
                        <div class="info-box">
                            <em class="ranking-num">${el.num}</em>
                            <div class="webtoon-info">
                                <strong class="webtoon-tit">
                                    ${el.title}
                                    <em class="badge">
                                      ${isUp}
                                      ${isCuttoon}
                                    </em>
                                </strong>
                                <p class="desc">${el.desc}</p>
                            </div>
                        </div>
                    </a>
                  </li>`
      });
      bestTen2.forEach(el => {
        const isUp = el.up ? upEl : "";
        const isCuttoon = el.cuttoon ? cuttoonEl : "";

          html4+=`<li class="webtoon-item">
                    <a href="${el.url}" class="link-webtoon">
                        <div class="thumbnail">
                            <img src="${el.imgSrc}" alt="${el.alt}">
                        </div>
                        <div class="info-box">
                            <em class="ranking-num">${el.num}</em>
                            <div class="webtoon-info">
                                <strong class="webtoon-tit">
                                    ${el.title}
                                    <em class="badge">
                                      ${isUp}
                                      ${isCuttoon}
                                    </em>
                                </strong>
                                <p class="desc">${el.desc}</p>
                            </div>
                        </div>
                    </a>
                  </li>`
      });
      bannerSlide.forEach(el => {

          html5+=`<div class="swiper-slide">
                    <a href="${el.url}" class="link-new" style="background-color:${el.color}">
                        <div class="content-wrap">
                            <div class="info-box">
                                <strong class="webtoon-tit">${el.title}</strong>
                                <span class="writer">${el.writer}</span>
                                <p class="desc">${el.desc}</p>
                            </div>
                            <div class="thumb-box">
                                <img src="${el.imgSrc1}" alt="${el.alt}" class="new-img1">
                                <img src="${el.imgSrc2}" alt="${el.alt}" class="new-img2">
                                <div class="thumb-bg">
                                    <img src="${el.imgSrc3}" alt="${el.alt}">
                                </div>
                            </div>
                        </div>
                    </a>
                </div>`
      });
      femaleAge10.forEach(el => {
        const isUp = el.up ? upEl : "";
        const isCuttoon = el.cuttoon ? cuttoonEl : "";

        html6+= `<li class="webtoon-item">
                    <a href="${el.url}" class="link-webtoon">
                        <div class="thumbnail">
                            <img src="${el.imgSrc}" alt="${el.alt}">
                        </div>
                        <div class="info-box">
                            <em class="ranking-num">${el.num}</em>
                            <div class="webtoon-info">
                                <strong class="webtoon-tit">
                                    ${el.title}
                                    <em class="badge">
                                        ${isUp}
                                        ${isCuttoon}
                                    </em>
                                </strong>
                                <span class="writer">${el.writer}</span>
                            </div>
                        </div>
                    </a>
                </li>`
      });
      maleAge10.forEach(el => {
        const isUp = el.up ? upEl : "";
        const isCuttoon = el.cuttoon ? cuttoonEl : "";

        html7+= `<li class="webtoon-item">
                    <a href="${el.url}" class="link-webtoon">
                        <div class="thumbnail">
                            <img src="${el.imgSrc}" alt="${el.alt}">
                        </div>
                        <div class="info-box">
                            <em class="ranking-num">${el.num}</em>
                            <div class="webtoon-info">
                                <strong class="webtoon-tit">
                                    ${el.title}
                                    <em class="badge">
                                        ${isUp}
                                        ${isCuttoon}
                                    </em>
                                </strong>
                                <span class="writer">${el.writer}</span>
                            </div>
                        </div>
                    </a>
                </li>`
      });
      femaleAge20.forEach(el => {
        const isUp = el.up ? upEl : "";
        const isCuttoon = el.cuttoon ? cuttoonEl : "";

        html8+= `<li class="webtoon-item">
                    <a href="${el.url}" class="link-webtoon">
                        <div class="thumbnail">
                            <img src="${el.imgSrc}" alt="${el.alt}">
                        </div>
                        <div class="info-box">
                            <em class="ranking-num">${el.num}</em>
                            <div class="webtoon-info">
                                <strong class="webtoon-tit">
                                    ${el.title}
                                    <em class="badge">
                                        ${isUp}
                                        ${isCuttoon}
                                    </em>
                                </strong>
                                <span class="writer">${el.writer}</span>
                            </div>
                        </div>
                    </a>
                </li>`
      });
      femaleAge30.forEach(el => {
      const isUp = el.up ? upEl : "";
      const isCuttoon = el.cuttoon ? cuttoonEl : "";

      html9+= `<li class="webtoon-item">
                  <a href="${el.url}" class="link-webtoon">
                      <div class="thumbnail">
                          <img src="${el.imgSrc}" alt="${el.alt}">
                      </div>
                      <div class="info-box">
                          <em class="ranking-num">${el.num}</em>
                          <div class="webtoon-info">
                              <strong class="webtoon-tit">
                                  ${el.title}
                                  <em class="badge">
                                      ${isUp}
                                      ${isCuttoon}
                                  </em>
                              </strong>
                              <span class="writer">${el.writer}</span>
                          </div>
                      </div>
                  </a>
              </li>`
      });
      maleAge30.forEach(el => {
      const isUp = el.up ? upEl : "";
      const isCuttoon = el.cuttoon ? cuttoonEl : "";

      html10+= `<li class="webtoon-item">
                  <a href="${el.url}" class="link-webtoon">
                      <div class="thumbnail">
                          <img src="${el.imgSrc}" alt="${el.alt}">
                      </div>
                      <div class="info-box">
                          <em class="ranking-num">${el.num}</em>
                          <div class="webtoon-info">
                              <strong class="webtoon-tit">
                                  ${el.title}
                                  <em class="badge">
                                      ${isUp}
                                      ${isCuttoon}
                                  </em>
                              </strong>
                              <span class="writer">${el.writer}</span>
                          </div>
                      </div>
                  </a>
              </li>`
      });
      collection1.forEach(el => {
        const isUp = el.up ? upEl : "";
        const isCuttoon = el.cuttoon ? cuttoonEl : "";
  
        html11+= `<li class="webtoon-item">
                    <a href="${el.url}" class="link-webtoon">
                        <div class="thumbnail">
                            <img src="${el.imgSrc}" alt="${el.alt}">
                        </div>
                        <div class="info-box">
                            <strong class="webtoon-tit">${el.title}</strong>
                            <span class="writer">${el.writer}</span>
                        </div>
                    </a>
                 </li>`
      });
      collection2.forEach(el => {
        const isUp = el.up ? upEl : "";
        const isCuttoon = el.cuttoon ? cuttoonEl : "";
  
        html12+= `<li class="webtoon-item">
                    <a href="${el.url}" class="link-webtoon">
                        <div class="thumbnail">
                            <img src="${el.imgSrc}" alt="${el.alt}">
                        </div>
                        <div class="info-box">
                            <strong class="webtoon-tit">${el.title}</strong>
                            <span class="writer">${el.writer}</span>
                        </div>
                    </a>
                 </li>`
      });

      const list1 = document.querySelector('#home .slide1 #webtoon1');
      const list2 = document.querySelector('#home .slide1 #webtoon2');
      const list3 = document.querySelector('#home .slide1 #best1');
      const list4 = document.querySelector('#home .slide1 #best2');
      const bannerList = document.querySelector('#home .slide2 .swiper-wrapper');
      const list5 = document.querySelector('#home .slide3 #femaleAge10');
      const list6 = document.querySelector('#home .slide3 #maleAge10');
      const list7 = document.querySelector('#home .slide3 #femaleAge20');
      const list8 = document.querySelector('#home .slide3 #maleAge20');
      const list9 = document.querySelector('#home .slide3 #femaleAge30');
      const list10 = document.querySelector('#home .slide3 #maleAge30');
      const list11 = document.querySelector('#home #collection1');
      const list12 = document.querySelector('#home #collection2');

      list1.innerHTML = html;
      list2.innerHTML = html2
      list3.innerHTML = html3;
      list4.innerHTML = html4;
      bannerList.innerHTML = html5;
      list5.innerHTML = html6;
      list6.innerHTML = html7;
      list7.innerHTML = html8;
      list8.innerHTML = html7;
      list9.innerHTML = html9;
      list10.innerHTML = html10;
      list11.innerHTML = html11;
      list12.innerHTML = html12;


      const swiper1 = new Swiper(".slide1 .swiper", {
        slidesPerView: "auto",
        loop:true,
        spaceBetween: 0
      });

      swiper1.on('slideChange',function(){
        if(this.realIndex > 1){
          $('.btn-best').addClass('active').siblings().removeClass('active');
        }else{
          $('.btn-webtoon').addClass('active').siblings().removeClass('active');
        }
      });

      $('.tab-area a').click(function(){
        if ($(this).attr('aria-selected')=="true") {
          swiper1.slideTo(0);
          $('.btn-webtoon').addClass('active').siblings().removeClass('active');
        } else {
          swiper1.slideTo(2);
          $('.btn-best').addClass('active').siblings().removeClass('active');
        }
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
        loop:true,
        pagination: {
          el: ".sc-age .tab-area",
          clickable: true,
          renderBullet: function (index, className) {
              return `<a href="#" class="btn-tab ${className}">${slide3Arr[index]}</a>`;
            }
          }
        });
  });

  fetch("./asset/data/weekday.json") //
  .then((response) => response.json())
  .then((json) => {

      const newWebtoon = json.newWebtoon;
      const weekdayList = json.weekdayList;

      const breakEl = `<i class="ic-break"><span class="blind">휴재</span></i>`

      
      let html = '';
      let html2 = '';
   
      newWebtoon.forEach(el => {

          html+=`  <div class="swiper-slide">
                      <a href="${el.url}" class="link-webtoon">
                          <div class="thumbnail">
                              <img src="${el.imgSrc}" alt="${el.alt}">
                          </div>
                          <div class="info-box">
                              <strong class="webtoon-tit">${el.title}</strong>
                              <span class="writer">${el.writer}</span>
                              <p class="desc">${el.desc}</p>
                          </div>
                      </a>
                    </div>`
      });
      weekdayList.forEach(el => {
        const isBreak = el.break ? breakEl : "";

          html2+= ` <li class="webtoon-item">
                        <a href="${el.url}" class="link-webtoon">
                            <div class="thumbnail">
                                <img src="${el.imgSrc}" alt="${el.alt}">
                            </div>
                            <div class="info-box">
                                <strong class="webtoon-tit">
                                    ${el.title}
                                    <em class="badge">
                                      ${isBreak}
                                    </em>
                                </strong>
                                <span class="writer">${el.writer}</span>
                                <span class="like">${el.like}</span>
                            </div>
                        </a>
                    </li>`
      });
  
      const list1 = document.querySelector('#weekday .slide4 .swiper-wrapper');
      const list2 = document.querySelector('#weekday .sc-webtoon .webtoon-list');
      

      list1.innerHTML = html;
      list2.innerHTML = html2;
    
      const swiper4 = new Swiper(".slide4 .swiper", {
        slidesPerView: "auto",
        spaceBetween: 0,
        loop:true,
        pagination: {
          el: ".fraction2",
          type: "fraction",
        }
      });

  });

  fetch("./asset/data/end.json") //
  .then((response) => response.json())
  .then((json) => {

      const endWebtoon = json.endWebtoon;
      const endList = json.endList;

      let html = '';
      let html2 = '';
   
      endWebtoon.forEach(el => {

          html+=`  <div class="swiper-slide">
                      <a href="${el.url}" class="link-webtoon">
                          <div class="thumbnail">
                              <img src="${el.imgSrc}" alt="${el.alt}">
                          </div>
                          <div class="info-box">
                              <strong class="webtoon-tit">${el.title}</strong>
                              <span class="writer">${el.writer}</span>
                              <p class="desc">${el.desc}</p>
                          </div>
                      </a>
                    </div>`
      });
      endList.forEach(el => {

          html2+=`<li class="webtoon-item">
                      <a href="${el.url}" class="link-webtoon">
                          <div class="thumbnail">
                              <img src="${el.imgSrc}" alt="${el.alt}">
                          </div>
                          <div class="info-box">
                              <strong class="webtoon-tit">${el.title}</strong>
                              <span class="writer">${el.writer}</span>
                              <span class="like">${el.like}</span>
                          </div>
                      </a>
                  </li>`
      });
  
      const list1 = document.querySelector('#end .slide5 .swiper-wrapper');
      const list2 = document.querySelector('#end .sc-webtoon .webtoon-list');

      list1.innerHTML = html;
      list2.innerHTML = html2;
    
      const swiper5 = new Swiper(".slide5 .swiper", {
        slidesPerView: "auto",
        spaceBetween: 0,
        loop:true,
        pagination: {
          el: ".fraction3",
          type: "fraction",
        }
      });
  });
})