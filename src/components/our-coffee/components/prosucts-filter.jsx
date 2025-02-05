import { Component } from "react";

class ProductsFilter extends Component {

	buttonsData = [
		{ label: "Brazil", filterText: "Brazil" },
		{ label: "Columbia", filterText: "Columbia" },
		{ label: "Kenya", filterText: "Kenya" }
	]
	
	render() {
		const buttons = this.buttonsData.map(({ label, filterText }) => {
			console.log(filterText, this.props.stateFilter);
			const activeClass = filterText === this.props.stateFilter ? "products-filter__button_active" : "";
			return (
				<button
					onClick={() => this.props.onUpdateFilter(filterText)}
					className={activeClass}
					key={filterText}>
					{label}
				</button>
			);
		});

		return (
			<div className="products-filter">
				<label htmlFor="products-filter">Or filter</label>
				<div className="products-filter__buttons">
					{buttons}
				</div>
			</div>
		);
	}
}
export default ProductsFilter;