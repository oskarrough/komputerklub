$(document).ready(function(){
	$('#js-toggle-panel--left').click(function(){
		$('body').removeClass('panel-is-active--right');
		$('body').toggleClass('panel-is-active--left');
	});

	$('#js-toggle-panel--right').click(function(){
		$('body').removeClass('panel-is-active--left');
		$('body').toggleClass('panel-is-active--right');
	});

	$('section').click(function(){
		$('body').removeClass('panel-is-active--left');
		$('body').removeClass('panel-is-active--right');
	});
});