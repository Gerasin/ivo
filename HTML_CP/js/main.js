
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



    //tabs
    var act = 'open';
    var tabCont = '.tab_cont';
    $('.tab_lnk').on( "click", function() { 
        if($(this).hasClass(act)) {
            $(this).removeClass(act);
            $(this).next(tabCont).slideUp();
        } else {
            $(this).addClass(act);
            $(this).next(tabCont).slideDown();
        }
    });
    $('.tab_cont_close').on( "click", function() { 
        $(this).parents(tabCont).prev().removeClass(act);
        $(this).parents(tabCont).slideUp();
    });
	
	$('.tab_cont').hide();

    $('.height_row').each(function(){
        var maxHeight = 0;
        $(this).find('.height_row-i').each(function(){
            maxHeightIt = $(this).height();
            if(maxHeightIt > maxHeight) {maxHeight = maxHeightIt};
        });
        maxHeight = maxHeight + 25;
        $('.height_row').find('.height_row-i').css({'height' : maxHeight})
    });


    var dashboard = '.dashboard-i',
    dashboard_row = '.dashboard_cont',
    dashboardOpen = '.dashboard--info',
    act = 'active',
    act_l = 'active_l',
    position;
    $('.dashboard--namber').on( "click", function() { 
        if($(this).parents(dashboard).hasClass(act)) {
            $(this).parents(dashboard).removeClass(act);
            $(this).parents(dashboard).removeClass(act_l);
            $(this).parents(dashboard).find(dashboardOpen).fadeOut();
        } else {
            $(dashboard).removeClass(act);
            $(dashboard).removeClass(act_l);
            $(dashboardOpen).fadeOut();
            $(this).parents(dashboard).addClass(act);
            actPosit = $(this).offset().left;
            actMax = $(dashboard_row).width() - $(this).parents(dashboard).width() * 6;
            if(actPosit > actMax) {
                $(this).parents(dashboard).addClass(act_l) 
            };
            $(this).parents(dashboard).addClass(act)
            $(this).parents(dashboard).find(dashboardOpen).fadeIn();
            position = $(dashboard_row).offset().top - $(this).offset().top;
            $(this).parents(dashboard).find(dashboardOpen).css({ 'top' : position, 'height' : $(dashboard_row).height() });
        }
    });

    $('.dashboard:not(:first)').hide();
    $('.filter_tab a').on( "click", function() { 
        $('.filter_tab a').removeClass('active');
        $(this).addClass('active');
        index = $(this).index();
        $('.dashboard').hide();
        $('.dashboard').eq(index).show();
        return false;
    });



})