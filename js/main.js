$(function(){
	$(document).on('click', '#search-top', function(){
		$('#search-area').toggleClass('open');
	}).on('click', '#mobile-menu', function(){
		$('#mobile-menu-area').toggleClass('open');
	});
});