
var element = require( './../lib' );

// Methods to create elements:
var createHTMLElement = element.html,
	createSVGElement = element.svg,
	createTextNode = element.text;

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
	data,
	caption,
	text;

// Create a new figure element:
figure = createHTMLElement( 'figure' );

// Configure the figure:
figure
	.attr( 'property', 'figure' )
	.attr( 'class', 'figure' );

// Create a new SVG canvas element and configure:
canvas = createSVGElement( 'svg' );

canvas
	.attr( 'xmlns', 'http://www.w3.org/2000/svg' )
	.attr( 'xmlns:xlink', 'http://www.w3.org/1999/xlink' )
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

	data[ i ] = createSVGElement( 'circle' );

	data[ i ]
		.attr( 'cx', xPos )
		.attr( 'cy', yPos )
		.attr( 'r', radius );

	canvas.append( data[ i ] );
}

// Create a caption element and insert some text:
caption = createHTMLElement( 'div' );

caption
	.attr( 'property', 'caption' )
	.attr( 'class', 'caption' );

text = createTextNode();

text.content( 'Random particles on a canvas.' );

// Append the text to the caption element:
caption.append( text );

// Append the caption to the figure:
figure.append( caption );

// Serialize the figure:
console.log( figure.toString() );