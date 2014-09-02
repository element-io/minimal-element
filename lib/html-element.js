/**
*
*	MINIMAL HTML ELEMENT
*
*
*	DESCRIPTION:
*		- Factory which creates minimal DOM-like HTML elements.
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

	var Uber = require( './element.js' );


	// HTML ELEMENT //

	/**
	* FUNCTION: Element( name )
	*	HTML element constructor.
	*
	* @constructor
	* @param {String} name - element name
	* @returns {Element} Element instance
	*/
	function Element( name ) {
		Uber.call( this );
		this._name = name;

		// TODO: element look-up to set whether the element is void:
		this._void = false;
		return this;
	} // end FUNCTION Element()

	/**
	* Create a prototype which inherits from the parent prototype.
	*/
	Element.prototype = Object.create( Uber.prototype );

	/**
	* Set the constructor.
	*/
	Element.prototype.constructor = Element;

	
	// EXPORTS //

	module.exports = function createElement( name ) {
		if ( typeof name !== 'string' ) {
			throw new TypeError( 'createElement()::invalid input argument. Name must be a string.' );
		}
		// TODO: ensure valid tag name
		return new Element( name );
	};

})();