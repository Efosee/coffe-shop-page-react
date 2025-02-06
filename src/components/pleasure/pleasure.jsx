import PleasureMain from "./components/main";
import AboutGoods from "./components/about-goods";
import ProductList from "../products-list/products-list";

const Pleasure = (props) => {

	return (
		<>
			<PleasureMain />
			<AboutGoods />
			<div className="pleasure">
				<ProductList productData={props.productData} featured={false} onRoutePage={props.onRoutePage} />
			</div>
		</>
	);
}

export default Pleasure;