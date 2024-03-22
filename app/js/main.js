$(function(){

    $(".rate-star").rateYo({
        rating: 5,
        starWidth: "12px",
        readOnly: true
      });
      
      $('.product-slider__inner').slick({
        dots: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4,
      });


      $(".js-range-slider").ionRangeSlider({ //ползунок фильтра
        type: "double",
        min: 0,
        max: 1000,
        from: 0,
        to: 600,
        prefix: "$"
    });

    $('.icon-th-list').on('click', function(){ //добовляем доп класс к указаннаму классу по клику
      $('.product__item').addClass('list');
      $('.icon-th-list').addClass('active');
      $('.icon-th-large').removeClass('active');//удаляем доп класс у указанного класса по клику
  });
  $('.icon-th-large').on('click', function(){ //удаляем доп класс у указанного класса по клику
    $('.product__item').removeClass('list');
    $('.icon-th-large').addClass('active');
    $('.icon-th-list').removeClass('active');
  })

  $('.product-one__tabs .tab').on('click', function(event) {
    var id = $(this).attr('data-id');
      $('.product-one__tabs').find('.tab-item').removeClass('active-tab').hide();
      $('.product-one__tabs .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#'+id).addClass('active-tab').fadeIn();
      return false;
    });


  $('.menu__btn').on('click', function(){ // (найди элемент) (действие к элементу, function())
    $('.menu__list').slideToggle();
  })

  $('.header__btn-menu').on('click', function(){ // (найди элемент) (действие к элементу, function())
    $('.header__box').toggleClass('active');
  })
  
    var mixer = mixitup('.products__inner-box');


    
})