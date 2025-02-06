import { Component } from "react";

import OurCoffee from "../our-coffee/our-coffee";
import AppCoffeeHouse from "../coffee-house/app-coffee-house";
import Pleasure from "../pleasure/pleasure";
import AppHeader from "../app-header/app-header";
import AppFooter from "../app-footer/app-footer";
import ProductPage from '../product-page/product-page';

import './app.css'

class App extends Component {
	state = {
		data: null,
		page: "house",
		productId: ''
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
				return <AppCoffeeHouse productData={this.state.data} onRoutePage={this.onRoutePage}/>
			case "ourCoffee":
				return <OurCoffee productData={this.state.data} onRoutePage={this.onRoutePage}/>
			case "pleasure":
				return <Pleasure productData={this.state.data} onRoutePage={this.onRoutePage}/>
			case "product":
				return <ProductPage productId={this.state.productId}/>
			default:
				return <div>ERROR</div>
		}
	}

	onRoutePage = (page, id=0) => {
		this.setState({page});
		if (id){
			this.onGetProductId(id);
		}
	}

	onGetProductId = (productId) =>{
		this.setState({productId});
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
