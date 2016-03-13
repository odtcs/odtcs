$(function() {
	jQuery('video, object').maximage('maxcover');
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
				timeout: 5000,
				before: function(last,current){
					//if(!$.browser.msie){
						// Start HTML5 video when you arrive
						if($(current).find('video').length > 0) $(current).find('video')[0].play();
					//}
				},
				after: function(last,current){
					//if(!$.browser.msie){
						// Pauses HTML5 video when you leave it
						if($(last).find('video').length > 0) $(last).find('video')[0].pause();
					//}
				}
		}
	});
}