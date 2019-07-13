jQuery(window).load(function(){	
	//Search select option
	$(function(){	
		$(".searchOptiondropdown .dropdown-menu li a").click(function(){	
			$(".selectbtn:first-child").text($(this).text());
			$(".selectbtn:first-child").val($(this).text());	
		});	
	});
	
	//Reason for contact select option
	$(function(){	
		$(".reasonContactWraper .dropdown-menu li a").click(function(){	
			$(".reasonContact:first-child").text($(this).text());
			$(".reasonContact:first-child").val($(this).text());	
		});	
	});
	
	//Credit card type select option
	$(function(){	
		$(".cardTypeWraper .dropdown-menu li a").click(function(){	
			$(".cardType:first-child").text($(this).text());
			$(".cardType:first-child").val($(this).text());	
		});	
	});
	
	//Product Quantity select option
	$(function(){	
		$(".contactSupplier .dropdown-menu li a").click(function(){	
			$(".selectQty:first-child").text($(this).text());
			$(".selectQty:first-child").val($(this).text());	
		});	
	});
	
	//Business Location select option
	$(function(){	
		$(".signUp .dropdown-menu li a").click(function(){	
			$(".businessLocation:first-child").text($(this).text());
			$(".businessLocation:first-child").val($(this).text());	
		});	
	});
	
	//B2B Supplier upload product currency select
	$(function(){	
		$(".currencySelect .dropdown-menu li a").click(function(){	
			$(".currency:first-child").text($(this).text());
			$(".currency:first-child").val($(this).text());	
		});	
	});
	
	//B2B Supplier upload product qty select
	$(function(){	
		$(".qtySelect .dropdown-menu li a").click(function(){	
			$(".qty:first-child").text($(this).text());
			$(".qty:first-child").val($(this).text());	
		});	
	});
	
	//B2B Supplier upload product delivery time select
	$(function(){	
		$(".perTimeSelect .dropdown-menu li a").click(function(){	
			$(".perTime:first-child").text($(this).text());
			$(".perTime:first-child").val($(this).text());	
		});	
	});
	
	//B2C Country checkout select 
	$(function(){	
		$(".checkoutCountrySelect .dropdown-menu li a").click(function(){	
			$(".checkoutCountry:first-child").text($(this).text());
			$(".checkoutCountry:first-child").val($(this).text());	
		});	
	});
	
	//B2C State checkout select
	$(function(){	
		$(".checkoutStateSelect .dropdown-menu li a").click(function(){	
			$(".checkoutState:first-child").text($(this).text());
			$(".checkoutState:first-child").val($(this).text());	
		});	
	});
	
	//B2C Card Exp. date select
	$(function(){	
		$(".cardExpDateSelect .dropdown-menu li a").click(function(){	
			$(".cardExpDate:first-child").text($(this).text());
			$(".cardExpDate:first-child").val($(this).text());	
		});	
	});
	
	//B2C Card Exp. year select
	$(function(){	
		$(".cardExpYearSelect .dropdown-menu li a").click(function(){	
			$(".cardExpYear:first-child").text($(this).text());
			$(".cardExpYear:first-child").val($(this).text());	
		});	
	});
	
	//Recently Viewed Carousel
	  var recentView = $("#recentlyViewed");
      recentView.owlCarousel({
	  //autoPlay : 3000,
      items : 3, //10 items above 1199px browser width
      itemsDesktop : [1199,2], //2 items between 1199px and 992px
      itemsDesktopSmall : [991,2], // 2 items betweem 991px and 768px
      itemsTablet: [767,5], //5 items between 767 and 481;
      itemsMobile : [480,3] //3 items between 480 and 0;
      
      });
      // Custom Navigation Events
      $(".next").click(function(){
        recentView.trigger('owl.next');
      })
      $(".prev").click(function(){
        recentView.trigger('owl.prev');
      });
	  
	  //Premium Products Carousel
	  var premPro = $("#premiumProducts");
      premPro.owlCarousel({
	  //autoPlay : 3000,
      items : 4, //10 items above 1199px browser width
      itemsDesktop : [1199,3], //2 items between 1199px and 992px
      itemsDesktopSmall : [991,2], // 2 items betweem 991px and 768px
      itemsTablet: [767,2], //5 items between 767 and 481;
      itemsMobile : [480,1] //3 items between 480 and 0;
      
      });
      // Custom Navigation Events
      $(".next").click(function(){
        premPro.trigger('owl.next');
      })
      $(".prev").click(function(){
        premPro.trigger('owl.prev');
      })
	  
	  //Premium Products Full Width Carousel
	  var premProFullWidth = $("#premiumProductsFullWidth");
      premProFullWidth.owlCarousel({
	  //autoPlay : 3000,
      items : 5, //10 items above 1199px browser width
      itemsDesktop : [1199,5], //2 items between 1199px and 992px
      itemsDesktopSmall : [991,3], // 2 items betweem 991px and 768px
      itemsTablet: [767,2], //5 items between 767 and 481;
      itemsMobile : [480,1] //3 items between 480 and 0;
      
      });
      // Custom Navigation Events
      $(".next").click(function(){
        premProFullWidth.trigger('owl.next');
      })
      $(".prev").click(function(){
        premProFullWidth.trigger('owl.prev');
      })
	  
	//Script for vertical slider
		$('.youMayLike').bxSlider({
			mode: 'vertical',
			//slideWidth: 300,
			minSlides: 3,
			slideMargin: 10
		});
		
	//Script for feature product slider
		$('.feature-product').bxSlider({
			mode: 'vertical',
			//slideWidth: 300,
			minSlides: 5,
			slideMargin: 10
		});
		
	//Script for Company Info slider
		$(function() {			
			$('#coInfoSlideshow').desoSlide({
				thumbs: $('#coInfoSlideshow_thumbs li > a'),				
			});			
		});
		
	//Script for equal height
		$(function(cash) {
			$('.equal').responsiveEqualHeightGrid(); 
		});
		
	
	//Script for Sticky Product Category List
	var stickyNavTop = $('.productCategoryList').offset().top;	
	var stickyNav = function(){
	var scrollTop = $(window).scrollTop();	
		if (scrollTop > stickyNavTop) { 
			$('.productCategoryList').addClass('sticky');
		} else {
			$('.productCategoryList').removeClass('sticky'); 
		}
	};	
	stickyNav();	
		$(window).scroll(function() {
		stickyNav();
	});
		
		
	//Script for count down	
		$(function() {
	// *************************************************** EDIT DATE IN LINE BELOW ******************************************			   
	$('div#clock').countdown("2015/6/16" , function(event) {
	var $this = $(this);
	switch(event.type) {
	case "seconds":
	case "minutes":
	case "hours":
	case "days":
	case "weeks":
	case "daysLeft":
	$this.find('span#'+event.type).html(event.value);
	break;
	case "finished":
	$this.hide();
	break;
	}
	});
	});
	
	
	
});
