jQuery(document).ready(function($){
	//if you change this breakpoint in the style.css file (or _layout.scss if you use SASS), don't forget to update this value as well
	var MqL = 992;
	//move nav element position according to window width
	moveNavigation();
	$(window).on('resize', function(){
		(!window.requestAnimationFrame) ? setTimeout(moveNavigation, 300) : window.requestAnimationFrame(moveNavigation);
	});

	//mobile - open lateral menu clicking on the menu icon
	$('.cd-nav-trigger').on('click', function(event){
		event.preventDefault();
		if( $('.cd-main-content').hasClass('nav-is-visible') ) {
			closeNav();
			$('.cd-overlay').removeClass('is-visible');
		} else {
			$(this).addClass('nav-is-visible');
			$('.cd-primary-nav').addClass('nav-is-visible');
			$('.main-menu').addClass('nav-is-visible');
			$('.cd-main-content').addClass('nav-is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				$('body').addClass('overflow-hidden');
			});
			toggleSearch('close');
			$('.cd-overlay').addClass('is-visible');
		}
	});

	//open search form
	$('.cd-search-trigger').on('click', function(event){
		event.preventDefault();
		toggleSearch();
		closeNav();
	});

	//close lateral menu on mobile 
	$('.cd-overlay').on('swiperight', function(){
		if($('.cd-primary-nav').hasClass('nav-is-visible')) {
			closeNav();
			$('.cd-overlay').removeClass('is-visible');
		}
	});
	$('.nav-on-left .cd-overlay').on('swipeleft', function(){
		if($('.cd-primary-nav').hasClass('nav-is-visible')) {
			closeNav();
			$('.cd-overlay').removeClass('is-visible');
		}
	});
	$('.cd-overlay').on('click', function(){
		closeNav();
		toggleSearch('close')
		$('.cd-overlay').removeClass('is-visible');
	});


	//prevent default clicking on direct children of .cd-primary-nav 
	$('.cd-primary-nav').children('.has-children').children('a').on('click', function(event){
		event.preventDefault();
	});
	//open submenu
	$('.has-children').children('a').on('click', function(event){
		if( !checkWindowWidth() ) event.preventDefault();
		var selected = $(this);
		if( selected.next('ul').hasClass('is-hidden') ) {
			//desktop version only
			selected.addClass('selected').next('ul').removeClass('is-hidden').end().parent('.has-children').parent('ul').addClass('moves-out');
			selected.parent('.has-children').siblings('.has-children').children('ul').addClass('is-hidden').end().children('a').removeClass('selected');
			$('.cd-overlay').addClass('is-visible');
		} else {
			selected.removeClass('selected').next('ul').addClass('is-hidden').end().parent('.has-children').parent('ul').removeClass('moves-out');
			$('.cd-overlay').removeClass('is-visible');
		}
		toggleSearch('close');
		
	});
	
	//submenu items - go back link
	$('.go-back').on('click', function(){
		$(this).parent('ul').addClass('is-hidden').parent('.has-children').parent('ul').removeClass('moves-out');
	});

	function closeNav() {
		$('.cd-nav-trigger').removeClass('nav-is-visible');
		$('.main-menu').removeClass('nav-is-visible');
		$('.cd-primary-nav').removeClass('nav-is-visible');
		$('.has-children ul').addClass('is-hidden');
		$('.has-children a').removeClass('selected');
		$('.moves-out').removeClass('moves-out');
		$('.cd-main-content').removeClass('nav-is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
			$('body').removeClass('overflow-hidden');
		});
	}

	function toggleSearch(type) {
		if(type=="close") {
			//close serach 
			$('.cd-search').removeClass('is-visible');
			$('.cd-search-trigger').removeClass('search-is-visible');
			$('.cd-overlay').removeClass('search-is-visible');
		} else {
			//toggle search visibility
			$('.cd-search').toggleClass('is-visible');
			$('.cd-search-trigger').toggleClass('search-is-visible');
			$('.cd-overlay').toggleClass('search-is-visible');
			if($(window).width() > MqL && $('.cd-search').hasClass('is-visible')) $('.cd-search').find('input[type="search"]').focus();
			($('.cd-search').hasClass('is-visible')) ? $('.cd-overlay').addClass('is-visible') : $('.cd-overlay').removeClass('is-visible') ;
		}
	}

	function checkWindowWidth() {
		//check window width (scrollbar included)
		var e = window, 
		a = 'inner';
		if (!('innerWidth' in window )) {
			a = 'client';
			e = document.documentElement || document.body;
		}
		if ( e[ a+'Width' ] >= MqL ) {
			return true;
		} else {
			return false;
		}
	}

	function moveNavigation(){
		var navigation = $('.cd-nav');
		var desktop = checkWindowWidth();
		if ( desktop ) {
			navigation.detach();
			navigation.insertBefore('.cd-header-buttons');
		} else {
			navigation.detach();
			navigation.insertAfter('.cd-main-content');
		}
	}
});

$('.mobile-header .search').click(function () {
	$(this).parent().find('.search-form').slideToggle();
});

//Кол-во в товаре
$('.minus').click(function () {
	var $input = $(this).parent().find('input');
	var count = parseInt($input.val()) - 1;
	if(count < 1) count = 1;
	else if(isNaN(count)) count = 1;
                // else count = count;
                $input.val(count);
                $input.change();
                return false;
              });
$('.plus').click(function () {
	var $input = $(this).parent().find('input');
	var count = parseInt($input.val()) + 1;
	if(isNaN(count)) count = 1;
                // else count = count;
                $input.val(count);
                $input.change();
                return false;
              });   

//Sticky меню
$(window).on("scroll", function() {
  // Если высота больше 300px 
  // Добавляем классу header класс fixed
  if ($(window).scrollTop() > 200) $('.catalog-menu').addClass('sticky');
  // Иначе удаляем класс fixed
  else $('.catalog-menu').removeClass('sticky');
});
var $win = $(window),
$fixed = $(".sticky"),
limit = 200;

function tgl (state) {
	$fixed.toggleClass("hidden", state);
}

$win.on("scroll", function () {
	var top = $win.scrollTop();

	if (top < limit) {
		tgl(true);
	} else {
		tgl(false);
	}
});

//Sticky меню
$(window).on("scroll", function() {
  // Если высота больше 300px 
  // Добавляем классу header класс fixed
  if ($(window).scrollTop() > 200) $('.cd-primary-nav, .cd-primary-nav ul').addClass('sticky');
  // Иначе удаляем класс fixed
  else $('.cd-primary-nav, .cd-primary-nav ul').removeClass('sticky');
});
var $win = $(window),
$fixed = $(".sticky"),
limit = 200;

function tgl (state) {
	$fixed.toggleClass("hidden", state);
}

$win.on("scroll", function () {
	var top = $win.scrollTop();

	if (top < limit) {
		tgl(true);
	} else {
		tgl(false);
	}
});

	//Валидация форм
	$(document).on('ready', function() {

	});
	
	// Example starter JavaScript for disabling form submissions if there are invalid fields
	(function() {
		'use strict';
		window.addEventListener('load', function() {
		// Fetch all the forms we want to apply custom Bootstrap validation styles to
		var forms = document.getElementsByClassName('needs-validation');
		// Loop over them and prevent submission
		var validation = Array.prototype.filter.call(forms, function(form) {
			form.addEventListener('submit', function(event) {
				if (form.checkValidity() === false) {
					event.preventDefault();
					event.stopPropagation();
				}
				form.classList.add('was-validated');
			}, false);
		});
	}, false);
	})();

	window.addEventListener("DOMContentLoaded", function() {
		function setCursorPosition(pos, elem) {
			elem.focus();
			if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
			else if (elem.createTextRange) {
				var range = elem.createTextRange();
				range.collapse(true);
				range.moveEnd("character", pos);
				range.moveStart("character", pos);
				range.select()
			}
		}


	});
	
//Мобильность для Top-menu
$(document).ready(function () {
	var trigger = $('.hamburger'),
	overlay = $('.overlay'),
	isClosed = false;

	trigger.click(function () {
		hamburger_cross(); 
	});

	function hamburger_cross() {

		if (isClosed == true) { 
			overlay.hide();
			trigger.removeClass('is-open');
			trigger.addClass('is-closed');
			isClosed = false;
		} else { 
			overlay.show();
			trigger.removeClass('is-closed');
			trigger.addClass('is-open');
			isClosed = true;
		}
	}

	$('[data-toggle="offcanvas"]').click(function () {
		$('.wrap').toggleClass('toggled');
	}); 

});

var $status = $('.slick_counter');
var $slickElement = $('.wrap_slick');

$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
	var i = (currentSlide ? currentSlide : 0) + 1;
	$status.html('<span>' + i + '</span>' + '/' + slick.slideCount);
});

/*Фильтр*/
$('.form-filter-title').click(function() {
	if( $(this).next('.form-filter-body').hasClass('is-hidden') ) {
		$(this).parent().addClass('active').find('.form-filter-body').removeClass('is-hidden');
	}
	else {
		$(this).parent().removeClass('active').find('.form-filter-body').addClass('is-hidden')
	}
});

$(".filterrr .sel").click(function(){
	/*var attr = $(this).attr("title");
	$(".filterrr .sel").removeClass("active");
	$(".filterrr .hide").hide();
	$(".filterrr .sel").children("img").css("transform","rotate(0deg)");
	$(this).addClass("active");
	$(this).children("img").css("transform","rotate(-180deg)");

	$("." + attr).show('slow');

	$(".filterrr .active").click(function(){
		var attr = $(this).attr("title");
		if($("." + attr).is(":visible")){
			$("." + attr).hide();
			$(this).removeClass("active");
			$(this).children("img").css("transform","rotate(0deg)");
		} else {
			$("." + attr).show();
			$(this).addClass("active");
			$(this).children("img").css("transform","rotate(-180deg)");
		}
	});*/
	$(".filterrr .hide").hide(300);
	$(".filterrr .sel").children("img").css("transform","rotate(0deg)");
	var attr = $(this).attr("title");
	if($(this).hasClass('active')) {
		$(this).removeClass('active');
		$(".filterrr .hide").hide(300);
		$(this).children("img").css("transform","rotate(0deg)");
	}
	else {
		$(this).addClass('active');
		$(".filterrr .sel").not(this).removeClass('active');
		$("." + attr).show('slow');
		$(this).children("img").css("transform","rotate(-180deg)");
	}
});



$(".many").click(function(){
	var hidden = $(".hideen");
	if(hidden.is(":visible")){
		$(hidden).slideUp(300);

		$(this).children("b").text("Еще товары");
		$(this).children("img").css("transform","rotate(0deg)");
	} else {
		$(hidden).slideDown(300);
		$(this).children("b").text("Скрыть товары");
		$(this).children("img").css("transform","rotate(-180deg)");
	}
});

$(".selectboxssvalue").click(function(){
	var hide = $(this).parent(".selectboxss").children(".selectboxssmenu");
	var img = $(this).parent(".selectboxss").children(".selectboxssvalue").children("img");
	if($(hide).is(":visible")){
		$(hide).slideUp(300);
		//$(img).css("transform","rotate(0deg)");
		$(this).parent().css("border-bottom","solid 1px #c4c4c4");
	} else {
		$(hide).slideDown(300);
		//$(img).css("transform","rotate(-180deg)");
		$(this).parent().css("border-bottom","none");
	}
	$('.selectboxssvalue').not(this).parent(".selectboxss").children(".selectboxssmenu").slideUp(300).parent().css("border-bottom","solid 1px #c4c4c4");
});

$(".selectoption").click(function(){
	var val = $(this).html();
	var hide = $(this).parent(".selectboxssmenu");
	var img = $('.selectoption.active').parent(".selectboxssmenu").parent(".selectboxss").children(".selectboxssvalue").children("img");
	$(this).parent(".selectboxssmenu").prev(".selectboxssvalue").children("span").html(val);
	//$(".selectoption").removeClass("active");
	//$(this).addClass("active");
	$(hide).slideUp(300).parent().css("border-bottom","solid 1px #c4c4c4");
	$(img).css("transform","rotate(0deg)");
	/*if ($(".selectoption").hasClass("active")) {
		$(this).removeClass("active");
	}
	else {
		$(this).addClass("active");
	}
	$(this).addClass("active");*/
	if ($(this).hasClass("active")) {
		$(this).removeClass("active");
	}
	else {
		$(this).addClass("active");
	}
});
	

$(".filterrr .reset").click(function(){
	$(".selectboxssvalue span").text("Ничего не выбрано");
	$(".selectoption").removeClass("active");
});

/*Фильтр мобильность*/
$('.form-filter__trigger').click(function() {
	$(this).next().next('.filter-modal').css('top','-20px').css('position','fixed').css('z-index','999999');
	$(this).next().next('.filter-modal').find('.filterrr').css('display','block');
});
$('.form-filter__close').click(function() {
	$(this).parent().parent('.filterrr').css('display','none');
});
$('.filterrr .param-head').click(function() {
	$(this).parent().addClass('active').end().parent().parent().parent('.filterrr').addClass('second-visible');
});
$('.form-filter__back').click(function() {
	$(this).parent().parent('.filterrr').find('.hide').find('.form-filter__param').removeClass('active');
	$(this).parent().parent('.filterrr').removeClass('second-visible');
});


/*Сортировка мобильность*/
$('.form-sort__trigger').click(function() {
	$(this).next().next('.tovar').find('.sort').find('.form-filter__param').find('.param-body').find('.select').find('.jq-selectbox').find('.jq-selectbox__dropdown').css('display','block').css('visibility','visible').css('opacity','1');
});


/*Табы в товарах*/
$('.product-page-tab .nav-item').click(function() {
	$(this).addClass('tab-current').find('.nav-link').addClass('active').end('.product-page-tab .nav-item').removeClass('tab-current').find('.nav-link').removeClass('active');
	$(this).addClass('tab-current');
	$('.product-page-tab .nav-item').not(this).removeClass('tab-current');
});

/*Радио переключатели в корзине*/
$('.radio-type').click(function() {
	$(this).find('.jq-radio.checked').parent().addClass('radio-checked');
	$(this).addClass('radio-checked');
	$('.radio-type').not(this).removeClass('radio-checked');
});

/*Плавный скролл*/
	$(".cart").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});

/*Таблица упаковка адаптация*/
/*$('.product-page-tab .elem-table').each(function() {
		$(this).after('<table class="table-mobile"></table>')
		$(this).each(function() {
			$(this).parent().parent().parent().find('.table-mobile').append('<tr><td>' + $(this).find('td').eq(0).text() + '</td><td>' + $(this).find('td').eq(3).text() + '</td></tr><tr><td>' + $(this).find('td').eq(1).text() + '</td><td>' + $(this).find('td').eq(4).text() + '</td></tr><tr><td>' + $(this).find('td').eq(2).text() + '</td><td>' + $(this).find('td').eq(5).text() + '</td></tr><tr><td>' +
			$(this).find('td').eq(0).text() + '</td><td>' + $(this).find('td').eq(6).text() + '</td></tr><tr><td>' + $(this).find('td').eq(1).text() + '</td><td>' + $(this).find('td').eq(7).text() + '</td></tr><tr><td>' + $(this).find('td').eq(2).text() + '</td><td>' + $(this).find('td').eq(8).text() + '</td></tr><tr><td>' + 
			$(this).find('td').eq(0).text() + '</td><td>' + $(this).find('td').eq(9).text() + '</td></tr><tr><td>' + $(this).find('td').eq(1).text() + '</td><td>' + $(this).find('td').eq(10).text() + '</td></tr><tr><td>' + $(this).find('td').eq(2).text() + '</td><td>' + $(this).find('td').eq(11).text() + '</td></tr></table>')
		})
	})
*/