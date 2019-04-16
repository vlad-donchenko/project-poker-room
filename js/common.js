$(document).ready(function() {
  $('.popap_button').magnificPopup({
    type:'inline',
    midClick: true,
  });
  $('.open_room').magnificPopup({
    type:'inline',
    midClick: true,
  });
});

$("[data-mask='callback-catalog-phone']").mask("+380 99 99 99 999");


$(document).ready(function() {
    $(".main_navbar_list  a").click(function() {


      $('.burger').removeClass('clicked');
      $('.overlay').removeClass('show');
      $('.main_navber').removeClass('show');
      $('body').removeClass('overflow');
      
      var elementClick = $(this).attr("href")
      var destination = $(elementClick).offset().top;
      $("html:not(:animated),body:not(:animated)").animate({
        scrollTop: destination
      }, 800);
      return false;
    });
});

  $('.count_number').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 3000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});


  $('.burger, .overlay').click(function(){
    $('.burger').toggleClass('clicked');
    $('.overlay').toggleClass('show');
    $('.main_navber').toggleClass('show');
    $('body').toggleClass('overflow');
  });
