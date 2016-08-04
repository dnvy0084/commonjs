"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require("babel-register");

var _utils = require("./utils/utils");

var _Message = require("./messages/Message");

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
		}
	}, {
		key: "append",
		value: function append(message) {

			(0, _utils.add)((0, _utils.makeDom)(message));
		}
	}]);

	return Main;
}();

exports.default = Main;


new Main().run();