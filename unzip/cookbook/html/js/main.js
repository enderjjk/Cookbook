function init() {
	document.addEventListener("deviceready",startup,false);
	//For testing locally only...
	startup();
}
function eventHandler(){
	$(document).on('click', 'button#filters-hide-show', function(){
		var advancedFiltersDiv = $('#advanced-filters-div'),
			base = $(this);
			advancedFiltersDiv.toggleClass('show');
		if (advancedFiltersDiv.hasClass('show')){
				base.text('Hide filters');
			}else{
				base.text('Show filters');
			}
	}).delegate("#index", "pageshow", function() {
  		$('#menu').hide();
	}).delegate("#page1", "pageshow", function() {
  		$('#menu').show();
	}).delegate("#page2", "pageshow", function() {
  		$('#menu').show();
	});
}
function startup() {
	console.log("startup");
}