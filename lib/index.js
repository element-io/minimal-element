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

	/**
	* FUNCTION: Element( name )
	*	Element constructor.
	*
	* @constructor
	* @param {String} name - element name
	* @returns {Element} Element instance
	*/
	function Element( name ) {
		this._name = name;
		this._attributes = {};
		this._children = [];
		return this;
	} // end FUNCTION Element()

	/**
	* METHOD: attr( [name[, value] )
	*	Element attribute setter and getter. If no arguments are provided, returns an object containing all attribute-value pairs. If only a `name` is provided, returns the corresponding attribute `value`. If the attribute does not exist, returns `undefined`. If a `name` and `value` are provided, sets the attribute. Note: if the attribute already exists, overwrites the previous attribute `value`.
	*
	* @param {String} name - attribute name
	* @param {String|Number|Boolean} [value] - attribute value
	* @returns {Element|String} Element instance or attribute value
	*/
	Element.prototype.attr = function( name, value ) {
		var type;
		if ( !arguments.length ) {
			// Return a copy to prevent direct tampering.
			return JSON.parse( JSON.stringify( this._attributes ) );
		}
		if ( typeof name !== 'string' ) {
			throw new TypeError( 'attr()::invalid input argument. Attribute name must be a string.' );
		}
		if ( arguments.length === 1 ) {
			return this._attributes[ name ];
		}
		type = typeof value;
		if ( type !== 'string' && type !== 'boolean' && ( type !== 'number' || value !== value ) ) {
			throw new TypeError( 'attr()::invalid input argument. Attribute value must be a string, number, or boolean.' );
		}
		this._attributes[ name ] = value.toString();
		return this;
	}; // end METHOD attr()

	/**
	* METHOD: append( element )
	*	Appends an Element instance.
	*
	* @param {Element} element - Element instance to be appended (nested)
	* @returns {Element} Element instance
	*/
	Element.prototype.append = function( element ) {
		if ( !( element instanceof Element ) ) {
			throw new TypeError( 'append()::invalid input argument. Argument must be an Element instance.' );
		}
		this._children.push( element );
		return this;
	}; // end METHOD append()

	/**
	* METHOD: toString()
	*	Serializes the element as a string.
	*
	* @returns {String} serialized element
	*/
	Element.prototype.toString = function() {
		var attrs = this._attributes,
			names = Object.keys( attrs ),
			kids = this._children,
			attr,
			str;

		// Attributes:
		str = '<' + this._name;
		for ( var i = 0; i < names.length; i++ ) {
			attr = names[ i ];
			str += ' ' + attr + '=\"' + attrs[ attr ] + '\"';
		}
		str += '>';

		// Children:
		for ( var j = 0; j < kids.length; j++ ) {
			str += kids[ j ].toString();
		}
		str += '</' + this._name + '>';

		return str;
	}; // end METHOD toString()


	// EXPORTS //

	module.exports = function createElement( name ) {
		if ( typeof name !== 'string' ) {
			throw new TypeError( 'createElement()::invalid input argument. Name must be a string.' );
		}
		return new Element( name );
	};

})();