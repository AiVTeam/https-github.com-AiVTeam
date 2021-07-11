$(document).ready(function () {
    $("#inphone").mask("+7(999)999-9999");


$('form').submit(function(event){

    if ($('#inname') == "" ||$('#inemail') == "" || $('#inphone') == ""){
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
      $('html, body').animate({ scrollTop: $(valHref).offset().top });
    });
  
  
    $('#startProject').click(function () {
      $('html, body').animate({ scrollTop: $('#feedback').offset().top });
    });
  
    $('#learnMore').click(function () {
      $('html, body').animate({ scrollTop: $('#meet').offset().top });
    });

    $(window).on('load', function () {
      $('html, body').animate({ scrollTop: 0 });
    });
  
 
});