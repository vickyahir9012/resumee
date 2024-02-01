$(document).ready(function(){
    $('#menu').click(function(){
              $('#menu').toggleClass('fa-times');
              $('header').toggleClass('toggle')
          });
          $(window).on('scroll load',function(){
            $('#menu').removeClass('fa-times');
            $('header').removeClass('toggle');
          }); 
          
      });