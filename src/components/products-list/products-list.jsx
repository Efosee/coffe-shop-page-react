import Product from "../product/product";
import './product-list.css';

const ProductList = ({ productData, featured }) => {
	let listOfProducts;

	if (productData) {
		listOfProducts = getListOfProducts(listOfProducts, featured)
	}

	function getListOfProducts(listOfProducts, featured) {
		listOfProducts = productData.filter(item => item.featured === featured);
		return listOfProducts.map(({ src, productName, origin, price, id }) => {
			return <Product src={src}
				productName={productName}
				origin={origin}
				price={price}
				key={id} />
		});
	}

	return (
		<div className="product-list">
			{listOfProducts}
		</div>
	);
}

export default ProductList;