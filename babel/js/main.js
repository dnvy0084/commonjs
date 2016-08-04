
import { makeDom, add } from "./utils/utils";
import Message from "./messages/Message";

export default class Main{
	constructor(){
		console.log( "main", this.constructor.name );
	}

	run(){
		
		var m = new Message();

		this.append( m.text );

		this.append( m.text + " " + m.print( "a", "b", 1, 2, 3, "kim" ) );

		this.append( m.helloWorld() );

		this.append( "span test.1", "span" );
		this.append( "span test.2", "span" );

		this.append( m.helloBabel() );
	}

	append( message, dom = "p" ){
		
		add( makeDom( message, dom ) );
	}
}

new Main().run();


// babel transpile : es2015 코드를 CommonJS 코드로 바꿔준다. 
// babel js/ -d dist/ 로 컴파일 가능. 
// node_modules 
// babel-cli, babel-preset-2015

// browserify bundle : 각각의 file로 나눠져 있는 js 파일들을 
// CommonJS module import 규칙에 맞게 하나의 파일로 합친다. 
// browserify js/main.js -t babelify -o dist/bundle.js
// node_modules
// babelify

// webpack bundle: 각각의 file로 나눠져 있는 js 파일들을 
// CommonJS module import 규칙에 맞게 하나의 파일로 합친다. 
// webpack.config.js 참고 터미널에서 : webpack 입력
// node_modules
// babel-loader, babel-core
