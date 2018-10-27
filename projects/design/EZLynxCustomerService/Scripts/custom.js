// mobile slide menu
//$(document).ready(function() {   
//            var sideslider = $('[data-toggle=collapse-side]');
//            var sel = sideslider.attr('data-target');
//            var sel2 = sideslider.attr('data-target-2');
//            sideslider.click(function(event){
//                $(sel).toggleClass('in');
//                $(sel2).toggleClass('out');
//                $('body').toggleClass('pos-fix');
//            });

//            });
       
// carousel lob boxes
 $(window).bind('resize load', function() {
  var windowWidth = $(window).width();
  if(windowWidth < 768) 
     {
	  $('.tes').addClass('carousel-inner');  
	 }
	 else 
	 {
        $('.tes').removeClass('carousel-inner');
			  
	 }
 });
 $(document).ready(function () {

     $(window).resize(function () {
         var footerHeight = $('#footer').outerHeight();
         var stickFooterPush = $('.foot-botcol').height(footerHeight);

         $('.cc-container').css({ 'marginBottom': '-' + footerHeight + 'px' });
     });
     
     $(window).resize();

 });
// equal height colum
function equalHeight(group) {
    tallest = 0;
    group.each(function() {
        thisHeight = $(this).css({'height':'auto'}).height();
        if(thisHeight > tallest) {
            tallest = thisHeight;
        }
    });
    group.height(tallest);
}
$(window).on('load resize',function(){
  
    tallest = 0;
    $(".column").each(function () {
        thisHeight = $(this).css({ 'height': 'auto' }).height();
        if (thisHeight > tallest) {
            tallest = thisHeight;
        }
    });
    $(".column").height(tallest);
});
// switch header 
$("#switch").click(function() {
    $('header').toggleClass("header-show");
});
//Validation Function 
        $(function() {  
            $('#btnCheck').click(function () {
                var count = 0;
              $(".req:visible").each(function(){					
                  if ($.trim($(this).val()).length == 0) {
                      $(this).prev('.val-text').addClass('validText');
                      $(this).parent().prev('.val-text').addClass('validText');
                      $(this).closest('.val-line').addClass('valid-border');
                      count++;
                  }
                 
              });
             
              $("form").submit(function (e) {
                  if (count > 0 || $(".field-validation-error").length > 0) {
                      $("#btnCheck").prop("disabled", false);
                      count = 0;
                      e.preventDefault();
                  }
                  else {
                      $("#btnCheck").prop("disabled", true);
                      count = 0;
                      return true;
                  }
                  
              });
             });  
		}); 
//Remove border and colors on focus
        $(function () {
            
                 
                  
		$(".req").each(function(){	
						$(this).click(function() {                                    
						    $(this).prev().removeClass('validText');
						    $(this).parent().prev('.val-text').removeClass('validText');
									$(this).closest('.val-line').removeClass('valid-border');                  
							})  
		});
		$(".req").each(function () {
		    $(this).keydown(function () {
		        $(this).prev().removeClass('validText');
		        $(this).parent().prev('.val-text').removeClass('validText');
		        $(this).closest('.val-line').removeClass('valid-border');
		    })
		});
        });

        $(".carousel").on("touchstart", function (event) {
            var xClick = event.originalEvent.touches[0].pageX;
            $(this).one("touchmove", function (event) {
                var xMove = event.originalEvent.touches[0].pageX;
                if (Math.floor(xClick - xMove) > 5) {
                    $(".carousel").carousel('next');
                }
                else if (Math.floor(xClick - xMove) < -5) {
                    $(".carousel").carousel('prev');
                }
            });
            $(".carousel").on("touchend", function () {
                $(this).off("touchmove");
            });
        });
