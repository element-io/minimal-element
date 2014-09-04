Minimal Element
===============
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Library for creating minimal DOM-like elements.

This module provides a base class for creating minimal elements. These elements are DOM-like in the sense that they can have `tag` names, can have `attributes`, and can be nested. The comparisons stop there.

The motivation for this module is __not__ to replicate/emulate the DOM/browser on the server. Many other modules do that: [JSDOM](https://github.com/tmpvar/jsdom), [Cheerio](https://github.com/cheeriojs/cheerio), [html-element](https://github.com/1N50MN14/html-element), and others.

Instead, the motivation lines in wanting a minimal set of components for dynamically creating HTML/SVG/XML documents and serializing those documents to strings. 

## Notes

D3-like API (inspired by). Node module: html-element --> too DOM-like. Just want to serialize.  Comments not included (not inserted into D3 output). DOM-like in the sense that they correspond to DOM elements and you can nest them; share similar methods; but similarities stop there: this is intentionally NOT a full-featured emulator.



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