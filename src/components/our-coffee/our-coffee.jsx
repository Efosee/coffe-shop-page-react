import { Component } from "react";

import OurCoffeeMain from "./components/main";
import AboutBeans from "./components/about-beans";
import ProductsSearch from "./components/products-search";
import ProductsFilter from "./components/prosucts-filter";
import ProductList from "../products-list/products-list";

class OurCoffee extends Component {
	state = {
		term: '',
		filter: 'all'
	}
	onSearchCoffee = (term) => {
		this.setState({term});
	}

	searchData = (arr, term) => {
		if (!arr) return;
		if (term === "") return arr;
		return arr.filter(item => item.productName.indexOf(term) !== -1);
	}
	filterData = (arr, filter) => {
		switch(filter){
			case "Columbia":
				return arr.filter(item => item.origin === 'Columbia');
			case "Brazil":
				return arr.filter(item => item.origin === 'Brazil');
			case "Kenya":
				return arr.filter(item => item.origin === 'Kenya');
			default:
				return arr;
		}
	}
	onUpdateFilter = (filter) => {
		if (filter === this.state.filter){
			filter = "all";
		} 
		this.setState({filter});
	}
	render() {
		let productData = this.searchData(this.props.productData, this.state.term);
		productData = this.filterData(productData, this.state.filter)

		const ourCoffeeMainBg = require('../../img/our-coffee/our-coffee-main.png');
		document.documentElement.style.setProperty('--main-bg-url', `url(${ourCoffeeMainBg})`);
		return (
			<>
				<OurCoffeeMain />
				<AboutBeans />
				<div className="search-filter-panel">
					<ProductsSearch 
					term={this.state.term}
					onSearchCoffee={this.onSearchCoffee}/>
					<ProductsFilter onUpdateFilter={this.onUpdateFilter} stateFilter={this.state.filter}/>
				</div>
				<ProductList productData={productData} featured={false} />
			</>
		);
	}
}
export default OurCoffee;