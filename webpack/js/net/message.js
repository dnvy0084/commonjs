
var globalTemp = "moduleTemp variable";

module.exports.message = "Hello, ";

module.exports.print = function( name ){

	return module.exports.message + name;
};

function test(){
	return globalTemp;
}

module.exports.test = test;