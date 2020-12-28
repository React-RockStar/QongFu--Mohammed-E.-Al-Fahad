import React from 'react';
import './onboarding.css';

class OnBoarding_Page5 extends React.Component {
	render() {
		return (
			<div className="full-container">
				<div className="top-text">
					Well done!
				</div>
				<div className="done-icon-con">
					<img className="done-icon" src="../green_check.png" />
				</div>
				<div className="middle-text">
					Your account has been activated!
				</div>
				<div className="middle-text">
					Your world of Qongfu awaits.
				</div>
				<div className="bottom-text">
					Redirecting you to the home page...
				</div>
				<div>
					<input className="btn-done" type="button" value="DONE" />
				</div>
			</div>
		);
	}
}

export default OnBoarding_Page5;
