/**
 *	@file
 */
 (function($) {
 	//Checks to see if the page is displaying a views page
 	if($('.view-display-id-page_1').length && $('.view-header').length) {
 		$('header .inner-wrapper').append($('.view-header'));
 	}
 })(jQuery);