/**
*
*	MINIMAL ELEMENT
*
*
*	DESCRIPTION:
*		- Factory which creates minimal DOM-like elements.
*
*
*	NOTES:
*		[1] 
*
*
*	TODO:
*		[1] 
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

(function() {
	'use strict';

	// ELEMENT //

	var element = {};

	/**
	* HTML elements.
	*/
	element.html = require( './html-element.js' );

	/**
	* SVG elements.
	*/
	element.svg = require( './svg-element.js' );

	/**
	* Text elements.
	*/
	element.text = require( './text-element' );
	

	// EXPORTS //

	module.exports = element;

})();