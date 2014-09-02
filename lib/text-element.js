/**
*
*	MINIMAL TEXT ELEMENT
*
*
*	DESCRIPTION:
*		- Factory which creates minimal DOM-like text elements (textnodes).
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

	// MODULES //

	var Text = require( './text.js' );


	// EXPORTS //

	module.exports = function createElement() {
		return new Text();
	};

})();