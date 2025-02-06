import '../pleasure.css';

function PleasureMain() {
	const src = require('../../../img/pleasure/pleasure-main-bg.png');
	document.documentElement.style.setProperty('--main-bg-url', `url(${src})`);
	return (
		<div className="container">
			<div className="pleasure-main">
				<h1>For your pleasure</h1>
			</div>
		</div>
	);
}

export default PleasureMain;