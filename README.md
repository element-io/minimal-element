Minimal Element
===============
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Library for creating minimal DOM-like elements.

This library exposes methods for creating minimal DOM-like elements. These elements are DOM-like in the sense that they can have `tag` names, can have `attributes`, and can be nested. The comparisons stop there.

The motivation for this library is __not__ to replicate/emulate the DOM/browser on the server. Many other modules do that: [JSDOM](https://github.com/tmpvar/jsdom), [Cheerio](https://github.com/cheeriojs/cheerio), [html-element](https://github.com/1N50MN14/html-element), and others.

Instead, the motivation lines in wanting a minimal set of components for dynamically creating HTML/SVG/XML documents and serializing those documents to strings.


## Installation

``` bash
$  npm install minimal-element --save
```


## Usage

``` javascript
var element = require( 'minimal-element' );
```

The library has the following methods...


#### element.html( name )

Takes a tag `name` and returns a [minimal HTML element](https://github.com/element-io/minimal-html-element).

``` javascript
var div = element.html( 'div' );

div.attr( 'class', 'container' );
```


#### element.svg( name )

Takes a tag `name` and returns a [minimal SVG element](https://github.com/element-io/minimal-svg-element).

``` javascript
var canvas = element.svg( 'svg' );

canvas
	.attr( 'xmlns', 'http://www.w3.org/2000/svg' )
	.attr( 'xmlns:xlink', 'http://www.w3.org/1999/xlink' )
	.attr( 'xmlns:ev', 'http://www.w3.org/2001/xml-events' )
	.attr( 'class', 'canvas' )
	.attr( 'width', 500 )
	.attr( 'height', 500 );
```

Whenever you create SVG elements, ensure that the parent SVG container is [namespaced](https://github.com/element-io/minimal-svg-element). In a DOM environment, you are able to use namespace aware methods, such as `createElementNS()`, `setAttributeNS()`, `getAttributeNS()`, et cetera, enabling the browser to properly interpret created elements. Here, we have no DOM; we are serializing elements to string. To ensure that a client (e.g., the browser) uses the appropriate XML dialect when rendering SVG elements, be sure to set the namespace. The attributes in the example should be all you need.


#### element.custom( name )

Takes a custom tag `name` and returns a [minimal custom element](https://github.com/element-io/minimal-custom-element).

``` javascript
var myElement = element.custom( 'my-element' );

myElement.attr( 'class', 'special-widget' );
```

When naming custom elements, be sure to follow the custom element naming [convention](https://github.com/element-io/validate-element-name).


#### element.text()

Returns a [minimal text node](https://github.com/element-io/minimal-text-node).

``` javascript
var text = element.text();

text
	.content( 'Hello' )
	.append( ' world!' );
```


## Examples

``` javascript

var element = require( 'minimal-element' );

// Methods to create elements:
var createHTMLElement = element.html,
	createSVGElement = element.svg,
	createCustomElement = element.custom,
	createTextNode = element.text;

// Define some variables:
var width = 600,
	height = 400,
	numData = 100,
	radius = 5,
	xPos,
	yPos;

// Define our elements:
var widget,
	figure,
	canvas,
	data,
	caption,
	text;

// Create a custom figure widget:
widget = createCustomElement( 'widget-figure' );

widget
	.attr( 'property', 'widget' )
	.attr( 'class', 'widget' );

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
	.attr( 'xmlns:ev', 'http://www.w3.org/2001/xml-events' )
	.attr( 'property', 'canvas' )
	.attr( 'class', 'canvas' )
	.attr( 'width', width )
	.attr( 'height', height )
	.attr( 'viewBox', '0 0 ' + width + ' ' + height )
	.attr( 'preserveAspectRatio', 'xMidYMid' )
	.attr( 'data-aspect', width/height );

// Append the figure to the widget:
widget.append( figure );

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

// Create a caption element:
caption = createHTMLElement( 'figcaption' );

caption
	.attr( 'property', 'caption' )
	.attr( 'class', 'caption' );

// Create a text node to insert text into the caption element:
text = createTextNode();

text.content( 'Random particles on a canvas.' );

// Append the text to the caption element:
caption.append( text );

// Append the caption to the figure:
figure.append( caption );

// Serialize the figure:
console.log( widget.toString() );
```


To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Notes

* 	What this library does __not__ provide:
	- 	methods to "select" elements
	- 	a DOM
	- 	methods to dynamically remove, replace, manipulate, and prepend elements
	- 	support for including comments
*	The [Element](https://github.com/element-io/element) API is inspired by [D3](http://d3js.org):
	- 	`element.attr()`
	- 	`element.append()`


## Tests

### Unit

Unit tests use the [Mocha](http://visionmedia.github.io/mocha) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ open reports/coverage/lcov-report/index.html
```


## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. Athan Reines.



[npm-image]: http://img.shields.io/npm/v/minimal-element.svg
[npm-url]: https://npmjs.org/package/minimal-element

[travis-image]: http://img.shields.io/travis/element-io/minimal-element/master.svg
[travis-url]: https://travis-ci.org/element-io/minimal-element

[coveralls-image]: https://img.shields.io/coveralls/element-io/minimal-element/master.svg
[coveralls-url]: https://coveralls.io/r/element-io/minimal-element?branch=master

[dependencies-image]: http://img.shields.io/david/element-io/minimal-element.svg
[dependencies-url]: https://david-dm.org/element-io/minimal-element

[dev-dependencies-image]: http://img.shields.io/david/dev/element-io/minimal-element.svg
[dev-dependencies-url]: https://david-dm.org/dev/element-io/minimal-element

[github-issues-image]: http://img.shields.io/github/issues/element-io/minimal-element.svg
[github-issues-url]: https://github.com/element-io/minimal-element/issues