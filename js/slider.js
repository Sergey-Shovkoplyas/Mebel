$(document).ready(function(){
	$(".main-slider").slick({
        arrows: false,
		dots: true,
		fade: true
      });
	  $(".banner-slider").slick({
        arrows: true,
		dots: true,
		fade: true
      });
	 $(".carousel-slider").slick({
        infinite: true,
		slidesToShow: 6,
		arrows: true,
		slidesToScroll: 1,
		responsive: [
		{
		  breakpoint: 1999,
		  settings: {
			slidesToShow: 6,
			slidesToScroll: 1,
			infinite: true
		  }
		},
		{
		  breakpoint: 1900,
		  settings: {
			slidesToShow: 5,
			slidesToScroll: 1,
			infinite: true
		  }
		},
		{
		  breakpoint: 1500,
		  settings: {
			slidesToShow: 4,
			slidesToScroll: 1,
			infinite: true
		  }
		},
		{
		  breakpoint: 1280,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 1,
			infinite: true
		  }
		},
		{
		  breakpoint: 992,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 1,
			infinite: true
		  }
		},
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
			infinite: true
		  }
		},
		{
		  breakpoint: 415,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	  ]
      });
	  
	  /*Карусель в табах товаров*/
	  $('.responsive-slide').slick({
	  dots: false,
	  infinite: false,
	  speed: 300,
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  variableWidth: true,
	  responsive: [
		{
		  breakpoint: 1601,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 1,
			variableWidth: false,
			infinite: false,
			dots: false
		  }
		},
		{
		  breakpoint: 1201,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 1,
			infinite: false,
			variableWidth: true,
			dots: false
		  }
		},
		{
		  breakpoint: 600,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 2
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	  ]
	});
	  
	  $(".category-slider").slick({
		arrows: true
      });
	  $('.main-product-slider').slick({
     infinite: true,
     slidesToShow: 1,
     slidesToScroll: 1,
	 centerMode: true,
     arrows: true
	 });

	  $('.thumb-slider').slick({
		 infinite: true,
		 slidesToShow: 5,
		slidesToScroll: 1,
		 arrows: true,
		 focusOnSelect: true,
		 asNavFor: '.main-product-slider',
		 responsive: [
			{
			   breakpoint: 1601,
			   settings: {
				  swipe: true,
				  slidesToShow: 4,
				  slidesToScroll: 1
			   }
		  },
		  {
			   breakpoint: 1200,
			   settings: {
				  swipe: true,
				  slidesToShow: 3,
				  slidesToScroll: 1
			   }
		  },
		   {
			   breakpoint: 768,
			   settings: {
				  swipe: true,
				  slidesToShow: 3,
				  slidesToScroll: 1
			   }
		  },
		   {
			   breakpoint: 415,
			   settings: {
				  swipe: true,
				  slidesToShow: 3,
				  slidesToScroll: 1
			   }
		  }
		 ]
	 });
	 $('.main-product-slider').slickLightbox({
		itemSelector: 'a'
	  });
	  $('#ModalOrder').on('shown.bs.modal', function () {
		$('.carousel-slider').fadeIn(); //Что бы не прыгало изображение при открытии
		$('.carousel-slider').slick('unslick');
		$('.carousel-slider').slick({
		  infinite: true,
			slidesToShow: 5,
			arrows: true,
			slidesToScroll: 1,
			responsive: [
			{
			  breakpoint: 1999,
			  settings: {
				slidesToShow: 5,
				slidesToScroll: 1,
				infinite: true
			  }
			},
			{
			  breakpoint: 1900,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				infinite: true
			  }
			},
			{
			  breakpoint: 1400,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true
			  }
			},
			{
			  breakpoint: 1101,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true
			  }
			},
			{
			  breakpoint: 640,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true
			  }
			},
			{
			  breakpoint: 415,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		  ]       
		});
	  });
	   
}); // /ready
