import React from 'react'
import './onboarding.css';
import 'font-awesome/css/font-awesome.min.css';


class OnBoarding_Page3 extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Text />
				<Img />
				<Content />
				<Button />
			</div>
		)
	}
}
class Header extends React.Component {
	render() {
		return (
			<div className='header-sign'>
				<div className='process'>1</div>
				<div className='line'></div>
				<div className='process process-active'>2</div>
				<div className='line'></div>
				<div className='process'>3</div>
			</div>
		)
	}
}
class Text extends React.Component {
	render() {
		return (
			<div>
				<div className='content-text-page2'>
					<div>
						Awesome!
					</div>
					<div>
						Now let's make an Avatar
					</div>
				</div>
				<div>
					<div className='content-text-below-page2'>
						It's your latest picture or an image
					</div>
					<div className='content-text-below-page2'>
						that represents you.
					</div>
				</div>
			</div>
		)
	}
}

class Img extends React.Component {
	render() {
		return (
			<div className='img'>
				<img src='../user_icon.png' />
			</div>
		)
	}
}

class Content extends React.Component {
	render() {
		return(
			<div className='avatar-select'>
				<div>Avatar image</div>
				<div className='select-option'>Select <i class="fa fa-angle-down"></i></div>
			</div>
		)
	}
}

class Button extends React.Component {
	render() {
		return(
			<div className='button-group1'>
				<div>
					<button type='button' className='btn btn-upload'>Upload my avatar</button>
				</div>
				<div>
					<button type='button' className='btn-skip'>SKIP</button>
				</div>
			</div>
		)
	}
}
export default OnBoarding_Page3;