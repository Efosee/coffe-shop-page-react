import { Component } from "react";

import OurCoffee from "../our-coffee/our-coffee";
import AppCoffeeHouse from "../coffee-house/app-coffee-house";
import AppHeader from "../app-header/app-header";
import AppFooter from "../app-footer/app-footer";
import './app.css'

class App extends Component {
	state = {
		data: null,
		page: "house"
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

	async componentDidMount() {
		const data = await this.getJSON('/data/productData.json')
		this.setState({ data: data });
	}

	routePage(page){
		switch(page){
			case "house":
				return <AppCoffeeHouse productData={this.state.data}/>
			case "ourCoffee":
				return <OurCoffee productData={this.state.data}/>
			case "pleasure":
				return <div>In process</div>
			default:
				return <div>ERROR</div>
		}
	}

	onRoutePage = (page) => {
		this.setState({page});
	}


	render() {
		const page = this.routePage(this.state.page)

		return (
			<>
				<AppHeader onRoutePage={this.onRoutePage}/>
				{page}
				<AppFooter onRoutePage={this.onRoutePage}/>
			</>
		);
	}
}

export default App;
