import ProductList from "../../products-list/products-list";

const OurBest = (props) =>{
	return(
		<div className="container">
			<div className="our-best">
				<h2>Our best</h2>
				<ProductList featured={props.featured} productData={props.productData} onRoutePage={props.onRoutePage}/>
			</div>
		</div>
	);
}

export default OurBest;