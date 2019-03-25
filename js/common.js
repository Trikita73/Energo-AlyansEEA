$(document).ready(function() {

	$(".phone_button").click(function() {
		$(this).next().slideToggle();
	});
	$(".menu_header_button").click(function() {
		$("#menu_header ul").slideToggle();
	});
	$(".main_mnu_button").click(function() {
		$(".main_mnu ul").slideToggle();
	});
	$(".powers_button").click(function() {
		$(".img_alter").slideToggle();
	});
	$(".phones_button").click(function() {
		$(".phone_call_end").slideToggle();
	});
	$(".mail_button").click(function() {
		$(".mail_call_number").slideToggle();
	});
	$(".skype_button").click(function() {
		$(".skype_call_number").slideToggle();
	});

	/*$('.banner_text').equalHeights();*/

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$('#top').hide();
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#top').fadeIn();
			} else {
				$('#top').fadeOut();
			}
		});

		$("#top").click(function () {
			$("body, html").animate({
				scrollTop: 0
			}, 600);
			return false;
		});
	});	

	//Якорь
	$("#menu_header").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем индефикатор блока с атрибута href
		var id =$(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
		top = $(id).offset().top;

		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 500);	
	});

	$("a").on("click", function() {
	  $(".menu_list").toggle(); 
	});

	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#callback").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("#callback").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

	//Preloader 
	$(window).load(function() {
		$(".loader_inner").fadeOut();
		$(".loader").delay(400).fadeOut("slow");
	});

	//Owl-Carousel 2
	$('.owl-carousel').owlCarousel({
		items:1,
		margin:10,
		autoHeight:true,
		loop:true,
		autoplay:true,
		autoplayTimeout:5000,
		autoplayHoverPause:false
	});

});

//Скролл Верхнего Меню 
var header = new Headhesive('.header_lopline');

