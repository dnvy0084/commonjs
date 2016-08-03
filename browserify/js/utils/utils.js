
function each( collection, iter ){

	if( collection instanceof Array ){

		for( var i = 0, n = collection.length; i < n; i++ ){
			
			iter( collection[i], i, collection );
		}
	}
	else{

		for( var key in collection ){

			iter( collection[key], key, collection );
		}
	}
}

module.exports.each = each;

module.exports.filter = function( collection, iter ){

	if( collection == null ) return null;

	var filter = [];

	each( collection, function( a ){

		if( iter( a ) ){
			filter.push( a );
		}
	});

	return filter;
};