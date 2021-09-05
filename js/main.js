$(document).ready(function () {
  $("#inphone").mask("+7(999)999-9999");


  $('form').submit(function (event) {

    if ($('#inname') == "" || $('#inemail') == "" || $('#inphone') == "") {
      event.preventDefault();
      alert('Введены некорректные данные')
    }

    event.preventDefault();

    $.ajax({
      type: "POST",
      URL: "php/mail.php",
      data: $(this).serialize()
    }).done(function () {
      $(this).find("input").val("");
      alert("Comlete!");
      $("form").trigger("reset");
    })
    return false;
  });



  $('a[href^="#"]').click(function () {
    let valHref = $(this).attr("href");
    $('html, body').animate({ scrollTop: $(valHref).offset().top - $('.menu-wrap').outerHeight() });
  });


  $('#startProject').click(function () {
    $('html, body').animate({ scrollTop: $('#feedback').offset().top - $('.menu-wrap').outerHeight() });
  });

  $('#learnMore').click(function () {
    $('html, body').animate({ scrollTop: $('#meet').offset().top - $('.menu-wrap').outerHeight() });
  });

  // $(window).on('load', function () {
  //   $('html, body').animate({ scrollTop: 0 });
  // });

  $(window).scroll(() => {
    let scrollDistance = $(window).scrollTop();
      if(scrollDistance >= $('.menu').outerHeight()){
        $('.menu-wrap').addClass('scroll-head')
      } else {
        if($('.menu-wrap').hasClass('scroll-head')){
          $('.menu-wrap').removeClass('scroll-head')
        }
      }
  })



});

// BURGER MENU

$("#openBurgMenu").click(function () {
  
    $(".burger-menu-wrap").addClass("open");
    $(".blur").addClass("open");
    $(".blur").removeClass("close");
    $(".burger-menu-wrap").removeClass("close");
});
$("#closeBurgMenu").click(function () {
  
  $(".burger-menu-wrap").addClass("close");
  $(".burger-menu-wrap").removeClass("open");
  $(".blur").addClass("close");
  $(".blur").removeClass("open");
  setTimeout(function () {
    $(".burger-menu-wrap").removeClass("close");
  }, 400);
});
$(".burger-menu-buttons div").click(function () {
  
  $(".burger-menu-wrap").addClass("close");
  $(".burger-menu-wrap").removeClass("open");
  $(".blur").addClass("close");
  $(".blur").removeClass("open");
  setTimeout(function () {
    $(".burger-menu-wrap").removeClass("close");
  }, 400);
});

function burgerClose() {
  $(".menu-btn").removeClass("open");
  $(".menu-mobile__container").addClass("close");
  $(".menu-mobile__container").removeClass("open");
  menuOpen = false;

  setTimeout(function () {
    $(".menu-mobile__container").removeClass("close");
  }, 400);
};
