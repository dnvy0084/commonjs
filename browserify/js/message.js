
var name = require( "./name" );

var message = "hello, ";

function print( name ){
	console.log( "hello, %s", name );
}

module.exports.message = message + require( "./name.js" );
module.exports.print = print;