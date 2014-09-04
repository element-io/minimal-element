/**
*
*	MINIMAL ELEMENT
*
*
*	DESCRIPTION:
*		- Library for creating minimal DOM-like elements.
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
	element.html = require( 'minimal-html-element' );

	/**
	* SVG elements.
	*/
	element.svg = require( 'minimal-svg-element' );

	/*
	* Custom elements.
	*/
	element.custom = require( 'minimal-custom-element' );

	/**
	* Text elements.
	*/
	element.text = require( 'minimal-text-node' );
	

	// EXPORTS //

	module.exports = element;

})();