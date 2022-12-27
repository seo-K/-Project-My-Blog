//MAIN SLIDER START----------------------------
//main top_banner_slider
$(function () {
  var main_Slider = new Swiper('.top_slider', {
    loop: true,
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false // 쓸어 넘기거나 버튼 클릭 시 자동 슬라이드 정지 비활성화.
    // },
  })
});


//main we do 슬라이드
$(function () {

  var Win_W = $(window).width();
  var Wedo_Slider = undefined;

  function resizeSwiper() {

    if (Win_W < 900 && Wedo_Slider == undefined) {
      Wedo_Slider = new Swiper(".we_do_slide", {
        spaceBetween: 30,
        // effect: "fade",
        // autoplay: {
        //   delay: 5000,
        //   disableOnInteraction: false // 쓸어 넘기거나 버튼 클릭 시 자동 슬라이드 정지 비활성화.
        // },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    } else if (Win_W > 899 && Wedo_Slider != undefined) {
      Wedo_Slider.destroy();
      Wedo_Slider = undefined;
    }
  }

  resizeSwiper();

  $(window).on('resize', function () {
    Win_W = $(window).width();
    resizeSwiper();
  });
})




//main mid_slider
$(function () {
  var cardSlider = new Swiper('.mid_slider', {
    effect: "cards",
    grabCursor: true,

    cardsEffect: {
      prev: {
        shadow: true,
        translate: [0, 0, -400],
        opacity: 0
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },

    pagination: {
      el: ".swiper-pagination",
      type: "fraction",

      formatFractionCurrent: function (number) {
        return ('0' + number).slice(-2);
      },
      formatFractionTotal: function (number) {
        return ('0' + number).slice(-2);
      },
      renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' +
          ' / ' +
          '<span class="' + totalClass + '"></span>';
      }
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false // 쓸어 넘기거나 버튼 클릭 시 자동 슬라이드 정지 비활성화.
    // },
  })
});

//main 신입농가소개 슬라이드
$(function () {
  var farmer_slide = new Swiper(".farmer_slide", {
    slidesPerView: 3,
    spaceBetween: 20,
    slidesPerGroup: 3,
    // loop: true,
    loopFillGroupWithBlank: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.3,
        spaceBetween: 20,
        slidesPerGroup: 1,
        centeredSlides: true,
      },
      900: {
        slidesPerView: 2,
        spaceBetween: 12,
        slidesPerGroup: 2,
        centeredSlides: false,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 12,
        centeredSlides: false,
      },
    },
  });
});
//MAIN SLIDER END----------------------------


//farmer_info 농가 정보 이미지
$(function () {
  var farm_img = new Swiper(".farm_img", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false // 쓸어 넘기거나 버튼 클릭 시 자동 슬라이드 정지 비활성화.
    // },

  });
})

//farmer_info 농가 슬라이드 팝업
$(function () {
  var win_W = $(window).width();

  var swiper = new Swiper(".mySwiper", {
    // spaceBetween: 12,
    // slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      0: {
        slidesPerView: 3.2,
        spaceBetween: 6,
      },
      900: {
        slidesPerView: 5,
        spaceBetween: 12,
      },
    }
  });

  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });


  $(window).resize(function () {
    var win_W = $(window).width();

    if (win_W > 900) {
      var swiper = new Swiper(".mySwiper", {
        spaceBetween: 12,
        slidesPerView: 5,
        freeMode: true,
        watchSlidesProgress: true,
      });

      var swiper2 = new Swiper(".mySwiper2", {
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: swiper,
        },
      });
    } else {
      var swiper = new Swiper(".mySwiper", {
        spaceBetween: 6,
        slidesPerView: 3.2,
        freeMode: true,
        watchSlidesProgress: true,
      });

      var swiper2 = new Swiper(".mySwiper2", {
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: swiper,
        },
      });
    }

  })
})

//커뮤니티 중고거래 이미지 슬라이드
$(function () {

  var used_item_slider = new Swiper(".used_item.swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
      0: {
        slidesPerView: 1.3,
        spaceBetween: 20,
      },
      500: {
        slidesPerView: 2.3,
        spaceBetween: 20,
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    }
  })
})
//   var win_W = $(window).width();

// if (win_W > 900) {
//   var used_item_slider = new Swiper(".used_item.swiper", {
//     slidesPerView: 3,
//     spaceBetween: 20,
//   });
// } else {
//   var used_item_slider = new Swiper(".farmer_slide", {
//     slidesPerView: 1.3,
//     spaceBetween: 20,
//     centeredSlides: true,
//     // loop: true,
//   });
// }

//qna_content / job sell.... content 커뮤니티 컨텐츠 슬라이드
$(function () {
  var content_slide = new Swiper(".content_slide", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false // 쓸어 넘기거나 버튼 클릭 시 자동 슬라이드 정지 비활성화.
    // },

  });
})

//sell_used_item_content 중고거래 컨텐츠 슬라이드
$(function () {
  var content_slide_three = new Swiper(".content_slide_three", {
    slidesPerView: 3,
    spaceBetween: 12,

    // loop: true,
    loopFillGroupWithBlank: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 12,
      },
      900: {
        slidesPerView: 2,
        spaceBetween: 12,
        slidesPerGroup: 2,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 12,
        slidesPerGroup: 3,
      },
      // autoplay: {
      //   delay: 5000,
      //   disableOnInteraction: false // 쓸어 넘기거나 버튼 클릭 시 자동 슬라이드 정지 비활성화.
      // },
    }
  });
})