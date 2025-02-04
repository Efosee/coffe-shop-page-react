import coffeeBeansWhite from '../../img/icons/coffee_beans_white.png';
import coffeeBeansBlack from '../../img/icons/coffee_beans_black.png';
import './divider.css';

function Divider(props) {

	let clazz, src, alt;

	if (props.dividerClass === "white"){
		clazz = "divider_white";
		src = coffeeBeansWhite;
		alt = "white";
	} else{
		clazz = "divider_black";
		src = coffeeBeansBlack;
		alt = "black";
	}

	return (
		<div className=	{`divider ${clazz}`}>
			<img src={src} alt={`${alt} coffee beans`} className="coffee-beans" />
		</div>
	);
}

export default Divider;