jQuery(function($) {
    $(window).scroll(function(){
        if($(this).scrollTop()>130){
            $('#container_menu').addClass('fixed');
        }
        else if ($(this).scrollTop()<130){
            $('#container_menu').removeClass('fixed');
        }
    });
});

$(document).ready(function(){
    var touch = $('#touch-menu');
    var menu = $('.nav');
 
    $(touch).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });
    $(window).resize(function(){
        var wid = $(window).width();
        if(wid > 760 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
    
});

$(".show a").click(function(e){
        
    e.preventDefault();
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
    
});

$(".hide a").click(function(e){

    e.preventDefault();
    
});

$('.faq_item a').click(function(){ 
    $(this).parent().children('.faq_answ').toggle('.active'); 
    return false; 
    }); 
    
    $( ".faq_item a" ).on( "click" , function() { 
    $( ".faq_item" ).toggleClass( "active" ); 
    });

$(document).ready(function(){
    $('.productItem').hover(
        function() {
            $(this).addClass('visible');
        },
        function() {
            $(this).removeClass('visible');
        }
    );

    $('.pItemImgWrap').hover(
        function() {
            $(this).addClass('visible');
        },
        function() {
            $(this).removeClass('visible');
        }
    );
    
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,        
        arrows: true,
        responsive: [
    {
      breakpoint: 1240,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: true
      }
    },]
    });

  });



