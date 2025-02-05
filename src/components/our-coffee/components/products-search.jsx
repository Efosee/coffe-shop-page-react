
function ProductsSearch(props){
	const onSearchCoffee = (e) => {
		const value = e.target.value;
		console.log(value);
		props.onSearchCoffee(value);
	}
	return(
		<div className="products-search">
			<label htmlFor="products-search">Looking for</label>
			<input name="products-search" type="text" 
			placeholder="start typing here..."
			id="products-search"
			onChange={onSearchCoffee}
			value={props.term}/>
		</div>
	);
}

export default ProductsSearch;