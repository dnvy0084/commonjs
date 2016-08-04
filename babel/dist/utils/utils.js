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