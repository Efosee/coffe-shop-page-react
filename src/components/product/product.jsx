import { Component } from "react";
import './product.css';
class Product extends Component {

	render() {
		let {src, productName, origin, price, onRoutePage, productId} = this.props;

		if (origin) {
			origin = (
				<div className="product-item__origin">
					{origin}
				</div>);
		}

		return (
			<div className="product-item" onClick={() => onRoutePage("product", productId)}>
				<img src={src} alt={productName} />
				<div className="product-item__product-name">
					{productName}
				</div>
				{origin}
				<div className="product-item__price">
					{`${price}$`}
				</div>
			</div>
		);
	}
}

export default Product;