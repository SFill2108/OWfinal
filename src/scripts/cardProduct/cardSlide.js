$('.productSlider__main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.productSlider__navigation'
  });
  $('.productSlider__navigation').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.productSlider__main',
    arrows:false,
    focusOnSelect: true,
    mobileFirst: true,
    responsive: {
        breakpoint: 1200,
        settings: {
            slidesToShow: 6,
        }
    }
  });
  $('.itemCard').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });