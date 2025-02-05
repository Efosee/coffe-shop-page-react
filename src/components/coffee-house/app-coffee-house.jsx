import MainCoffeeHouse from "./components/main";
import AboutUs from "./components/about-us";
import OurBest from "./components/our-best";

const AppCoffeeHouse = (props) => {
	return (
		<>
		<MainCoffeeHouse/>
		<AboutUs/>
		<OurBest productData={props.productData} featured={true}/>
		</>
	);
}

export default AppCoffeeHouse;