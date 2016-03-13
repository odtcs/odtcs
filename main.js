$(function() {
	$('#maximage').maximage({
		cycleOptions: {
				fx: 'fade',
				// Speed has to match the speed for CSS transitions
				speed: 1500, 
				timeout: 3000,
				pause: 1
			},
        onFirstImageLoaded: function(){
            jQuery('#cycle-loader').hide();
            jQuery('#maximage').fadeIn('fast');
        }
	});
});