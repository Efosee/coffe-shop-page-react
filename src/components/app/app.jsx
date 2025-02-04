import { Component } from "react";

import AppCoffeeHouse from "../coffee-house/app-coffee-house";
import AppHeader from "../app-header/app-header";
import AppFooter from "../app-footer/app-footer";
import './app.css'

class App extends Component {


	render() {
		return (
			<>
				<AppHeader />
				<AppCoffeeHouse />
				<AppFooter/>
			</>
		);
	}
}

export default App;
