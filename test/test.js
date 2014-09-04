// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	element = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'minimal element', function tests() {
	'use strict';

	it( 'should export an object', function test() {
		expect( element ).to.be.an( 'object' );
	});

	it( 'should provide a method to create HTML elements', function test() {
		expect( element.html ).to.be.a( 'function' );
	});

	it( 'should provide a method to create SVG elements', function test() {
		expect( element.svg ).to.be.a( 'function' );
	});

	it( 'should provide a method to create custom elements', function test() {
		expect( element.custom ).to.be.a( 'function' );
	});

	it( 'should provide a method to create text nodes', function test() {
		expect( element.text ).to.be.a( 'function' );
	});

});