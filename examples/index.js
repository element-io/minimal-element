
var createElement = require( './../lib' );

// Define some variables:
var width = 600,
	height = 400,
	numData = 100,
	radius = 5,
	xPos,
	yPos;

// Define our elements:
var figure,
	canvas,
	data;

// Create a new figure element:
figure = createElement( 'figure' );

// Configure the figure:
figure
	.attr( 'property', 'figure' )
	.attr( 'class', 'figure' );

// Create a new SVG canvas element and configure:
canvas = createElement( 'svg' );

canvas
	.attr( 'property', 'canvas' )
	.attr( 'class', 'canvas' )
	.attr( 'width', width )
	.attr( 'height', height )
	.attr( 'viewBox', '0 0 ' + width + ' ' + height )
	.attr( 'preserveAspectRatio', 'xMidYMid' )
	.attr( 'data-aspect', width/height );

// Append the canvas to the figure:
figure.append( canvas );

// Create data elements and append to the canvas...
data = new Array( numData );
for ( var i = 0; i < numData; i++ ) {
	xPos = Math.round( Math.random()*width );
	yPos = Math.round( Math.random()*height );

	data[ i ] = createElement( 'circle' );

	data[ i ]
		.attr( 'cx', xPos )
		.attr( 'cy', yPos )
		.attr( 'r', radius );

	canvas.append( data[ i ] );
}

// Serialize the figure:
console.log( figure.toString() );