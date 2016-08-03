
$(document).ready(function() {

	$('.js_close').on( "click", function() { 
		$('.tr_close').removeClass('tr_close');
    	$(this).parents('tr').addClass('tr_close');
    });
    $('.js-close-prev').on( "click", function() {
    	$('.tr_close').removeClass('tr_close');
    });
    $('.js-close-ok').on( "click", function() {
    	$('.tr_close').remove();
    });
	
	


})