import Divider from '../../divider/divider';

function AboutBeans() {

	const aboutBeansImg = require('../../../img/our-coffee/about-our.jpg')
	return (
		<div className="container">
			<div className="about-beans">
				<img src={aboutBeansImg} alt="girl with a cap of coffee" className="about-beans__img" />
				<div className="about-beans__title">
					<h2 className='about-beans__header'>About our beans</h2>
					<Divider dividerClass="black" />
				</div>
				<div className="about-beans__description">
					Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
					<br /><br />
					Afraid at highly months do things on at. <br/>Situation recommend objection do intention
					<br/>so questions.<br/>
					As greatly removed calling pleased improve an. Last ask him cold feel
					<br/>met spot shy want. Children me laughing we prospect answered followed. At it went
					<br/>is song that held help face.
				</div>
				
				<div className="about-beans__divider"></div>
			</div>
		</div>
	);
}

export default AboutBeans;