/* Open when someone clicks on the span element */
function openNav() {
	if ($('body').width() < 767){
    	document.getElementById("navigation").style.left = "0%";
	}else{
		document.getElementById("navigation").style.left = "50%";
	}
}
/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("navigation").style.left = "100%";
}

$(function(){
	
	$(document).on('click', '#menu-icon', function(){
		
		$(this).toggleClass('is-active');
		if ($(this).hasClass('is-active')){
			openNav();
		}else{
			closeNav();
		}	
		
	}).on('click', '#navigation a', function(){
		var base = $('#menu-icon');
		base.toggleClass('is-active');
		if (base.hasClass('is-active')){
			openNav();
		}else{
			closeNav();
		}	
	}).on('click', '#search-top', function(){
		
		$('#search-area').toggleClass('open');
		
	}).on('click', '#mobile-menu', function(){
		
		$('#mobile-menu-area').toggleClass('open');
		
	}).on('click' , '#bookmark', function(){
		/*
		var item = $(this).next('i');
		if item.hasClass('fa-bookmark-o'){
			item.removeClass('fa-bookmark-o').addClass('fa-bookmark');
		}else{
			item.addClass('fa-bookmark-o').removeClass('fa-bookmark');
		}
		*/
	});
});