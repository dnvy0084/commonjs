
(function(){

	function paragraph( text ){

		var p = document.createElement( "p" );

		p.innerHTML = text;

		return p;
	}

	function append( dom, container ){

		var parent = container;

		if( typeof container === "string" ){
			parent = document.getElementById( container );
		}

		parent = parent || document.body;

		parent.appendChild( dom );
	}

	function each( collection, iter ){

		if( !collection ) return;
		
		if( collection instanceof Array ){

			for( var i = 0; i < collection.length; i++ ){

				iter( collection[i], i, collection );
			}
		}
		else{

			for( var key in collection ){

				iter( collection[key] );
			}
		}
	}

	function reduce( collection, iter, initialValue ){

		each( collection, function( a ){

			initialValue = initialValue + iter( a );
		});

		return initialValue;
	}

	function printScope(){

		return this;
	}

	var mod = module.exports;

	mod.paragraph = paragraph;
	mod.append = append;
	mod.each = each;
	mod.reduce = reduce;
	mod.printScope = printScope;

})();