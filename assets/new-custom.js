jQuery(window).on('load', function() {
  jQuery('.custom-product-slider').slick({
      dots: false,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      centerMode: true,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  });
