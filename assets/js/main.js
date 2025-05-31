
//Navbar toggle icon
function navbar_toggler() {
    $('.navbar-toggler[data-toggle=collapse]').click(function () {
        if ($(".navbar-toggler[data-bs-toggle=collapse] i").hasClass('fa-bars')) {
        } else {
            $(".navbar-toggler[data-bs-toggle=collapse] i").removeClass("fa-times");
        }
    });
  }
  navbar_toggler();
  
// Navbar clone in mobile device
function navClone() {
    $('.js-clone-nav').each(function () {
        var $this = $(this);
        $this.clone().attr('class', 'navbar-nav ml-auto').appendTo('.d2c_mobile_view_body');
    });

    $('.d2c_mobile_view .nav-link').click(function () {
        $(".nav-link").removeClass("active");
        $('.d2c_mobile_view').removeClass('show');
        $(this).toggleClass('active');
    });
    }
    navClone();

// Partner Slider
$('.d2c_partner_slider').slick({
centerMode: true,
centerPadding: '0px',
dots: false,
arrows: false,
infinite: true,
autoplay:true,
speed: 2000,
slidesToShow: 6,
slidesToScroll: 1,
responsive: [
    {
    breakpoint: 1500,
    settings: {
        slidesToShow: 5,
    }
    },
    {
    breakpoint: 992,
    settings: {
        slidesToShow: 3,
    }
    },
    {
    breakpoint: 480,
    settings: {
        slidesToShow: 2,
    }
    }
]
});

// Testimonial Slider
$('.d2c_testimonial_slider').slick({
    centerMode: true,
    centerPadding: '0px',
    dots: false,
    arrows: true,
    infinite: true,
    autoplay:true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="d2c_carousel_left_btn" aria-label="carousel-control"><i class="fas fa-arrow-left"></i></button>',
    nextArrow: '<button type="button" class="d2c_carousel_right_btn" aria-label="carousel-control"><i class="fas fa-arrow-right"></i></button>',
    responsive: [
        {
        breakpoint: 1400,
        settings: {
            slidesToShow: 1,
        }
        },
        {
        breakpoint: 1200,
        settings: {
            slidesToShow: 1,
        }
        },
        {
        breakpoint: 992,
        settings: {
            slidesToShow: 1,
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
        }
        }
    ]
});

// Form Validation Js
(function () {
    'use strict'
  
    var forms = document.querySelectorAll('.needs-validation')
  
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
    })
})();

// WOW JS
    new WOW().init();

// Preloader JS
window.addEventListener('load', function() {
    var preloader = document.querySelector('.preloader');
    preloader.classList.add('hide');
});

// ScrollBtn JS
window.onscroll = function() { scrollFunction() };

    function scrollFunction() {
    var scrollBtn = document.getElementById("scrollBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollBtn.classList.add("show");
    } else {
        scrollBtn.classList.remove("show");
    }
}

// Counter
$(document).ready(function() {

    var counters = $(".count");
    var countersQuantity = counters.length;
    var counter = [];
  
    for (i = 0; i < countersQuantity; i++) {
      counter[i] = parseInt(counters[i].innerHTML);
    }
  
    var count = function(start, value, id) {
      var localStart = start;
      setInterval(function() {
        if (localStart < value) {
          localStart++;
          counters[id].innerHTML = localStart;
        }
      }, 40);
    }
  
    for (j = 0; j < countersQuantity; j++) {
      count(0, counter[j], j);
    }
  });



// Template Name: {{CSUME V3 - Cyber Security Expert One Page Website Template}}
// Template URL: {{https://designtocodes.com/product/csume-v3-cyber-security-expert-one-page-template}}
// Description: {{Invest in Csume V3 onepage cyber security template today and take your cyber security expertise to new heights.}}
// Author: DesignToCodes
// Author URL: https://www.designtocodes.com
// Text Domain: {{ CSUME V3 }}
