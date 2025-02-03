import {Component} from "react";

import './app.css'

class App extends Component{


	render(){
		return(
			<h1>{this.props.hello}</h1>
		);
	}
}

export default App;
