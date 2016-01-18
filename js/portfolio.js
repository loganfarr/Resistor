/**
 *	@file
 */
(function($) {
	"use strict";

	var $backgroundImage = $('.field--name-field-background-image img');
	var $header = $('header');
	if($backgroundImage.length && !$('.js-portfolio-view').length) {
		$header.css('background-image', 'url(' + $backgroundImage.attr('src') + ')');
		$backgroundImage.hide();	
	}	

})(jQuery);