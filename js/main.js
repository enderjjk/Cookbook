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
	}).on('click', '#recipe--was--cooked', function(){
		var base = $(this);
		base.toggleClass('is--on');
		if (base.hasClass('is--on')){
			base.find('i').removeClass('fa-check-circle-o').addClass('fa-check-circle');
		}else{
			base.find('i').removeClass('fa-check-circle').addClass('fa-check-circle-o');
		}
	}).on('mouseenter', '#recipe--intro--ratings__items', function(){
		
		var currentRating = $('#recipe--intro--ratings__items').data('rating');
		$(this).removeClass(currentRating);
		
	}).on('click', '#recipe--intro--ratings__items span', function(){
		
		var currentRating = $('#recipe--intro--ratings__items').data('rating');
		var newRating = $('#recipe--intro--ratings__items .fa-star').filter(function() {
			return $(this).css('display') !== 'none';
		}).length;
		
		$(this).addClass('rating-'+newRating);
		$('#recipe--intro--ratings__items').data('rating', 'rating-'+newRating);
		
	}).on('mouseleave', '#recipe--intro--ratings__items', function(){
		var currentRating = $('#recipe--intro--ratings__items').data('rating');
		$(this).addClass(currentRating);
	}).on('click', '#metric--button button', function(){
		$('#metric--button button').removeClass('is--active');
		$(this).addClass('is--active');
		
	}).on('click', '#servings--plus', function () {
		var value = $('#serving__counter__input').val();
		value++;
		$('#servings--minus').removeAttr('disabled')
		$('#serving__counter__input').val(value);
	}).on('click', '#servings--minus', function () {
		var value = $('#serving__counter__input').val();
		value--;
		$('#serving__counter__input').val(value);
		if (value == 1){	
			$(this).attr('disabled', 'disabled');
		}
	});
});