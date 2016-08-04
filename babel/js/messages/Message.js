
import { each, map, filter } from "../utils/utils";

var world = require( "./world" );

export default class Message{

	constructor(){

	}

	get text(){

		return "Hello, ";
	}

	print( ...args ){
		
		var f = filter( args, (name)=>{

			return typeof name === "string";
		});

		return f.join( ", " );
	}

	helloWorld(){
		return this.text + world.world;
	}

	helloBabel(){
		return this.text + world.callBabel();
	}

} // class