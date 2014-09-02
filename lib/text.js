/**
*
*	MINIMAL ELEMENT
*
*
*	DESCRIPTION:
*		- Text class.
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

	// TEXT //

	/**
	* FUNCTION: Text()
	*	Text constructor.
	*
	* @constructor
	* @returns {Text} Text instance
	*/
	function Text() {
		this._content = '';
		return this;
	} // end FUNCTION Text()

	/**
	* METHOD: content( [content] )
	*	Text content setter and getter. If `content` is provided, sets the text content. If no `content` is provided, returns the text content.
	*
	* @param {String} [content] - text content
	* @returns {Text|String} Text instance or the content string
	*/
	Text.prototype.content = function( content ) {
		if ( !arguments.length ) {
			return this._content;
		}
		if ( typeof content !== 'string' ) {
			throw new TypeError( 'content()::invalid input argument. Content must be a string.' );
		}
		this._content = content;
		return this;
	}; // end METHOD content()

	/**
	* METHOD: append( content )
	*	Appends new content to existing content. Effectively, a shortcut for `text.content( text.content()+content );`.
	*
	* @param {String} content - text content to be appended
	* @returns {Text} Text instance
	*/
	Text.prototype.append = function( content ) {
		if ( typeof content !== 'string' ) {
			throw new TypeError( 'append()::invalid input argument. Content must be a string.' );
		}
		this._content += content;
		return this;
	}; // end METHOD append()

	/**
	* METHOD: toString()
	*	Serializes the element as a string.
	*
	* @returns {String} serialized element
	*/
	Text.prototype.toString = function() {
		return this._content;
	}; // end METHOD toString()


	// EXPORTS //

	module.exports = Text;

})();