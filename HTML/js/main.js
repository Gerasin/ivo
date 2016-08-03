
$(document).ready(function() {

	var owl = $('.corusel');
	owl.owlCarousel({
	    loop:true,
	    items:1,
	    margin:0,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	            nav:true
	        }
	    }
	});
	$('.js_tab_corusel a').on( "click", function() {
		$('.js_tab_corusel li').removeClass('active');
		var lnk = $(this).parent('li');
    	var index = lnk.index();
    	lnk.addClass('active');
    	owl.trigger('to.owl.carousel', [index, 300]);
    	return false;
    });


    owl.on('changed.owl.carousel', function(event) {
		var page = event.page.index; 
		$('.js_tab_corusel li').removeClass('active');
		$('.js_tab_corusel li').eq(page).addClass('active');
	})


	$('.clients_say').owlCarousel({
	    loop:true,
	    margin:0,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	            nav:true
	        }
	    }
	});

	// map google
	var varDraggable = false;
	if($(window).width() > 990) {
		varDraggable = true;
	}
    if($('#map').length) {
        var iconBase1 = 'img/marker1.png';
        var myLatLng1 = {
            lat: 55.971743,
            lng: 37.442483
        };
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 12,
            scrollwheel: false,
            center: myLatLng1,
        	draggable: varDraggable
        });
        var marker1 = new google.maps.Marker({
            position: myLatLng1,
            map: map,
            icon: iconBase1,
            title: 'Hello World!'
        });
        
        marker1.addListener('click', function() {
            infowindow1.open(map, marker1);
        });

    };

    $('.individually--check input').on( "change", function() {
    	var total = 0;
    	$('.individually--check input:checkbox:checked').each(function(){
    		var totalItem = $(this).parents('.individually_item').find('.inp_hidden').val() * 1;
    		console.log(totalItem);
    		total = totalItem + total;
    	});
    	$('.individually_total strong').text(total);
    	console.log();
    });

    $('.faq-header a').on( "click", function() {
    	$('.faq-cont').slideUp();
    	$(this).parents('.faq-header').next().slideDown();
    	return false;
    });

    if($('.blog_items').length) {
		var $grid = $('.blog_items').isotope({
		    itemSelector: '.blog-gallery',
		    percentPosition: true,
		    resizable : true,
		    transformsEnabled : true
		})
	};

	if($('.gallery--big').length) {
		$('.gallery--big').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		  fade: true,
		  asNavFor: '.gallery--min'
		});
		$('.gallery--min').slick({
		  slidesToShow: 6,
		  slidesToScroll: 1,
		  asNavFor: '.gallery--big',
		  dots: true,
		  focusOnSelect: true,
		  arrows: false,
		  responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 4
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 2
		      }
		    }
		  ]
		})
	};

	


})

new WOW().init();
