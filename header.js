//ナビゲーション用
;$(function(){
	const nav_bg = ['background01','background02','background03','background04','background05','background06'];
	$('#gnav_btn').on('click', function(){
		if($(this).hasClass('open')){
			$(this).removeClass('open');
			$('header nav').removeClass('open').stop().slideUp(500);
			$('#outside').fadeOut(100).addClass("disnone");
			$('body').removeClass('add_overray');
			$('header nav').removeClass(function(index, className) {
                return (className.match(/\bbackground\S+/g) || []).join(' ');
			});
		}else{
			$('header nav').addClass(nav_bg[Math.floor(Math.random() * nav_bg.length)]);
			$(this).addClass('open');
			$('header nav').addClass('open').stop().slideDown(500);
			$('#outside').fadeIn(100).addClass("disnone");
			$('body').addClass('add_overray');
		}
	});
	$('#outside').on('click', function(){
		$('#gnav_btn').removeClass('open');
		$('header nav').removeClass('open').stop().slideUp(500);
		$(this).fadeOut(100).addClass("disnone");
		$('body').removeClass('add_overray');
	});
	$('#nav_inner a').on('click', function() {
				$('#gnav_btn').removeClass('open');
		$('header nav').removeClass('open').stop().slideUp(500);
		$('#outside').fadeIn(100).addClass("disnone");
		$('body').removeClass('add_overray');
		});
});

