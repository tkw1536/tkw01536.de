$(window).resize(function(){

	$(".inner.cover").height($(window).innerHeight() - $(".masthead").height() - $(".mastfoot").height()); 
}).resize(); 