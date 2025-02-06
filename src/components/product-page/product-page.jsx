import { Component } from "react";

import Divider from "../divider/divider";
import OurCoffeeMain from "../our-coffee/components/main";
import './product-page.css';

function ProductInfo(props) {
	let origin = props.origin
	if(!props.origin){
		origin = "Not defined"
	}
	return (
		<div className="container">
			<div className="product-info">
				<img src={props.bigImgSrc} alt="our product" className="product-info__img" />
				<div className="product-info__wrapper">
					<h2 className='product-info__header'>About It</h2>
					<Divider dividerClass="black" />
					<div className="product-info__country"><b>Country: </b>{origin}</div>
					<div className="product-info__description">
						<b>Description: </b>
						{props.descr}
					</div>
					<div className="product-info__price"><span>Price:</span> {props.price}$</div>
				</div>
			</div>
		</div>
	);
}

class ProductPage extends Component {
	state = {
		data: ''
	}

	getProductData = async (id) => {
		try {
			const response = await fetch("/data/productInfo.json");
			if (!response.ok) {
				throw new Error(`Ошибка: ${response.status}`)
			}
			const arr = await response.json();
			const data = arr.find(item => item.id === id);
			return data;
		} catch(error){
			console.error("Ошибка загрузки данных:", error);
			return null;
		}
	}

	async componentDidMount() {
		const data = await this.getProductData(this.props.productId);
		
		this.setState({data})
	}


	render() {
		const {origin, descr, bigImgSrc, price} = this.state.data;
		return (
			<>
				<OurCoffeeMain />
				<ProductInfo price={price} origin={origin} descr={descr} bigImgSrc={bigImgSrc} />
			</>
		);
	}
}

export default ProductPage;