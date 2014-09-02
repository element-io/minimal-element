Minimal Element
===============
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Factory which creates minimal DOM-like elements.



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

[travis-image]: http://img.shields.io/travis/kgryte/minimal-element/master.svg
[travis-url]: https://travis-ci.org/kgryte/minimal-element

[coveralls-image]: https://img.shields.io/coveralls/kgryte/minimal-element/master.svg
[coveralls-url]: https://coveralls.io/r/kgryte/minimal-element?branch=master

[dependencies-image]: http://img.shields.io/david/kgryte/minimal-element.svg
[dependencies-url]: https://david-dm.org/kgryte/minimal-element

[dev-dependencies-image]: http://img.shields.io/david/dev/kgryte/minimal-element.svg
[dev-dependencies-url]: https://david-dm.org/dev/kgryte/minimal-element

[github-issues-image]: http://img.shields.io/github/issues/kgryte/minimal-element.svg
[github-issues-url]: https://github.com/kgryte/minimal-element/issues