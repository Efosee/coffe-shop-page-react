import '../coffee-house.css';

import Divider from '../../divider/divider';

function MainCoffeeHouse(props) {
	return (
		<div className="container">
			<main className='main coffee-house'>
				<h1>Everything You Love About Coffee</h1>
				<Divider dividerClass="white"/>
				<p>We makes every day full of energy and taste</p>
				<p>Want to try our beans?</p>
				<button className="more coffee-house__btn">More</button>
			</main>
		</div>
	);
}
export default MainCoffeeHouse;