import { Component } from "react";

import OurCoffee from "../our-coffee/our-coffee";
// import AppCoffeeHouse from "../coffee-house/app-coffee-house";
import AppHeader from "../app-header/app-header";
import AppFooter from "../app-footer/app-footer";
import './app.css'

class App extends Component {
	state = {
		data: null,
	}

	getJSON = async (src) => {
		try {
			const response = await fetch(src);

			if (!response.ok) {
				throw new Error(`Ошибка: ${response.status}`)
			}
			return await response.json()
		} catch (error) {
			console.error("Ошибка загрузки данных:", error);
			return null;
		}
	}
	// searchData = (arr, term) => {
	// 	if (!arr) return;
	// 	if (term === "") return arr;
	// 	return arr.filter(item => item.productName.indexOf(term) !== -1);
	// }

	async componentDidMount() {
		const data = await this.getJSON('/data/productData.json')
		this.setState({ data: data });
	}


	render() {
		return (
			<>
				<AppHeader />
				{/* <AppCoffeeHouse productData={this.state.data}/> */}
				<OurCoffee productData={this.state.data}/>
				<AppFooter />
			</>
		);
	}
}

export default App;
