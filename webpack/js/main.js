
require( "../css/style.css" );

var msg = require( "./net/message" ),
	utils = require( "./utils/utils" );

var globalTemp = "globalTemp vaiable";

function log( messages ){

	var map = utils.reduce( arguments, function(a){
		return a;
	}, "" );

	utils.append( utils.paragraph( map ) );
}

log( null );

log( "start main - webpack" );

log( "global ", globalTemp );
log( msg.test() );

log( msg.print( "kim" ) );
log( msg.message );

log( "autosave test" );
log( "이거 디게 좋다아~!" );
log( JSON.stringify( utils.printScope() ) );