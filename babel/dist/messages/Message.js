"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = require("../utils/utils");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var world = require("./world");

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