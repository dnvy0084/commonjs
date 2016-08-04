/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _utils = __webpack_require__(1);

	var _Message = __webpack_require__(2);

	var _Message2 = _interopRequireDefault(_Message);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Main = function () {
		function Main() {
			_classCallCheck(this, Main);

			console.log("main", this.constructor.name);
		}

		_createClass(Main, [{
			key: "run",
			value: function run() {

				var m = new _Message2.default();

				this.append(m.text);

				this.append(m.text + " " + m.print("a", "b", 1, 2, 3, "kim"));

				this.append(m.helloWorld());

				this.append("span test.1", "span");
				this.append("span test.2", "span");

				this.append(m.helloBabel());
			}
		}, {
			key: "append",
			value: function append(message) {
				var dom = arguments.length <= 1 || arguments[1] === undefined ? "p" : arguments[1];


				(0, _utils.add)((0, _utils.makeDom)(message, dom));
			}
		}]);

		return Main;
	}();

	exports.default = Main;


	new Main().run();

	// babel transpile : es2015 코드를 CommonJS 코드로 바꿔준다. 
	// babel js/ -f dist/ 로 컴파일 가능. 

	// browserify bundle : 각각의 file로 나눠져 있는 js 파일들을 
	// CommonJS module import 규칙에 맞게 하나의 파일로 합친다. 
	// browserify js/main.js -t babelify -o dist/bundle.js

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.each = each;
	exports.map = map;
	exports.filter = filter;
	exports.makeDom = makeDom;
	exports.add = add;
	function each(collection, iter) {

		if (collection instanceof Array) {

			for (var i = 0; i < collection.length; i++) {

				iter(collection[i], i, collection);
			}
		} else {

			var n = 0;

			for (var s in collection) {

				iter(collection[s], n++, collection);
			}
		}
	}

	function map(collection, iter) {

		var a = [];

		each(collection, function (e) {
			a.push(iter(e));
		});

		return a;
	}

	function filter(collection, iter) {

		var a = [];

		each(collection, function (e) {
			if (!iter(e)) return;

			a.push(e);
		});

		return a;
	}

	function makeDom(text) {
		var dom = arguments.length <= 1 || arguments[1] === undefined ? "p" : arguments[1];


		var element = document.createElement(dom);

		if (!element) return null;

		element.innerHTML = text;

		return element;
	}

	function add(dom) {
		var container = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


		container = container || document.body;

		container.appendChild(dom);
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _utils = __webpack_require__(1);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var world = __webpack_require__(3);

	var Message = function () {
		function Message() {
			_classCallCheck(this, Message);
		}

		_createClass(Message, [{
			key: "print",
			value: function print() {
				for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
					args[_key] = arguments[_key];
				}

				var f = (0, _utils.filter)(args, function (name) {

					return typeof name === "string";
				});

				return f.join(", ");
			}
		}, {
			key: "helloWorld",
			value: function helloWorld() {
				return this.text + world.world;
			}
		}, {
			key: "helloBabel",
			value: function helloBabel() {
				return this.text + world.callBabel();
			}
		}, {
			key: "text",
			get: function get() {

				return "Hello, ";
			}
		}]);

		return Message;
	}(); // class


	exports.default = Message;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	module.exports.world = "World!";

	module.exports.callBabel = function () {
		return "Babel!!";
	};

/***/ }
/******/ ]);