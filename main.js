$(function() {
	$('#choice-afternoon').click(function() {
		start("afternoon");
	});
	$('#choice-morning').click(function() {
		start("morning");
	});
});

function start(type) {
	$('#choice').remove();
	$('#maximage').show()
	$('.programme').not('.' + type).remove();
	$('#maximage').maximage({
		cycleOptions: {
				fx: 'fade',
				speed: 1000, 
				timeout: 8000
			}
	});
}