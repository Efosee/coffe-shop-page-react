import '../our-coffee.css';
const OurCoffeeMain = () =>{
	const ourCoffeeMainBg = require('../../../img/our-coffee/our-coffee-main.png');
	document.documentElement.style.setProperty('--main-bg-url', `url(${ourCoffeeMainBg})`);
	return(
		<div className="container">
			<div className="our-coffee">
				<h1>Our Coffee</h1>
			</div>
		</div>
	);
}
export default OurCoffeeMain;