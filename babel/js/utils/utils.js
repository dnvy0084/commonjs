
export function each( collection, iter ){

	if( collection instanceof Array ){

		for( var i = 0; i < collection.length; i++ ){
			
			iter( collection[i], i, collection );
		}
	}
	else{

		var n = 0;

		for( var s in collection ){

			iter( collection[s], n++, collection );
		}
	}

}

export function map( collection, iter ){

	var a = [];

	each( collection, (e)=>{
		a.push( iter(e) );
	});

	return a;
}

export function filter( collection, iter ){

	var a = [];

	each( collection, (e)=>{
		if( !iter(e) ) return;

		a.push( e );
	})

	return a;
}


export function makeDom( text, dom = "p" ){

	var element = document.createElement( dom );

	if( !element ) return null;

	element.innerHTML = text;

	return element;
}

export function add( dom, container = null ){
	
	container = container || document.body;

	container.appendChild( dom );
}