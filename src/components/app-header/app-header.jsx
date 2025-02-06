import logo from '../../img/icons/logo.svg';
import './app-header.css';

const NavBar = (props) => {
	const routeData = [
		{label: "Coffee house", route: "house"},
		{label: "Our coffee", route: "ourCoffee"},
		{label: "For your pleasure", route: "pleasure"}
	]
	const routeBtn = routeData.map(({route, label}) => {
		return(
			<li key={route}>
				<button onClick={() => props.onRoutePage(route)}> {label} </button>
				</li>
		);
	})
	return(
		<nav className="app-header">
		<img src={props.logoSrc} alt="logo" className="logo" />
		<ul className="app-header__nav">
		{routeBtn}
		</ul>
	</nav>
	);
}

const AppHeader = (props) => {
	const routeData = [
		{label: "Coffee house", route: "house"},
		{label: "Our coffee", route: "ourCoffee"},
		{label: "For your pleasure", route: "pleasure"}
	]
	const routeBtn = routeData.map(({route, label}) => {
		return(
			<li key={route}>
				<button onClick={() => props.onRoutePage(route)}> {label} </button>
				</li>
		);
	})
	return (
		<div className="container container_app-header">
			<nav className="app-header">
				<img src={logo} alt="logo" className="logo" />
				<ul className="app-header__nav">
					{routeBtn}
				</ul>
			</nav>
		</div>
	);
}
export {NavBar};
export default AppHeader;