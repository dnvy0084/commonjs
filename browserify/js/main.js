// 모듈을 불러온다. 
var message = require( "./message" ),
	utils = require( "./utils/utils" );


console.log( "start main.js" );

// 메세지 모듈 객체. 
console.log( "module: message ->", message );
// 유틸 모듈 객체. 
console.log( "module: utils ->", utils );

message.print( "kim" );
message.print( "jin" );

function stringCollect(){

	return utils.filter( arguments, function(a){

		return typeof a === "string";
	});
};

console.log( stringCollect( "a", 1, 2,3, "b" ) );

document.getElementById( "content" ).innerHTML = message.message;

class Temp{
	constructor(){
		
	}

	test(){
		console.log( this, message.message );
	}
}

var t = new Temp();

t.test();