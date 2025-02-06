import { NavBar } from "../app-header/app-header"
import Divider from "../divider/divider";

import logoSrc from '../../img/icons/logo_black.svg';
import './app-footer.css';

const AppFooter = (props) => {
	return (
		<div className="container">
			<footer>
				<NavBar onRoutePage={props.onRoutePage} logoSrc={logoSrc}/>
				<Divider dividerClass="black"/>
			</footer>
		</div>
	);
}
export default AppFooter;