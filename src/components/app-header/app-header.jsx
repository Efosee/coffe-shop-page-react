import logo from '../../img/icons/logo.svg';
import './app-header.css';

const NavBar = (props) => {
	return(
		<nav className="app-header">
		<img src={props.logoSrc} alt="logo" className="logo" />
		<ul className="app-header__nav">
			<li><button>Coffee house</button></li>
			<li><button>Our coffee</button></li>
			<li><button>For your pleasure</button></li>
		</ul>
	</nav>
	);
}

const AppHeader = () => {
	return (
		<div className="container container_app-header">
			<nav className="app-header">
				<img src={logo} alt="logo" className="logo" />
				<ul className="app-header__nav">
					<li><button>Coffee house</button></li>
					<li><button>Our coffee</button></li>
					<li><button>For your pleasure</button></li>
				</ul>
			</nav>
		</div>
	);
}
export {NavBar};
export default AppHeader;