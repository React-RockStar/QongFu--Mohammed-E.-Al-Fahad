import React from 'react'
import './onboarding.css';
import 'font-awesome/css/font-awesome.min.css';

class OnBoarding_Page4 extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Text />
				<Content />
				<Input />
				<Suggest />
				<Button />
			</div>
		)
	}
}

class Header extends React.Component {
	render() {
		return (
			<div className='header-sign1'>
				<div className='process'>1</div>
				<div className='line'></div>
				<div className='process'>2</div>
				<div className='line'></div>
				<div className='process process-active'>3</div>
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
						You're on Fire!
					</div>
					<div>
						Let's add some interests
					</div>
				</div>
				<div>
					<div className='content-text-below-page2'>
						Sharing your interests can help enhance
					</div>
					<div className='content-text-below-page2'>
						your overall Qongfu experience.
					</div>
				</div>
			</div>
		)
	}
}

class Content extends React.Component {
	render() {
		return(
			<div className='content-div'>
				<div className='content-box'>
					No Qongfu selected yet
				</div>
			</div>
		)
	}
}

class Input extends React.Component {
	render() {
		return(
			<div className='input-div'>
				<div className='input-form'>
					<input type='text' placeholder='i.e. Boxing, Pilates or Horse Riding' />
					<i class="fa fa-search"></i>
				</div>
			</div>
		)
	}
}

class Suggest extends React.Component {
	render() {
		return(
			<div className='suggest-div'>
				<div className='suggest-title'>
					Suggestions:
				</div>
				<div className='suggest list1'>
					<div>Boxing</div>
					<div>Cycling</div>
					<div>Ice Running</div>
				</div>
				<div className='suggest list2'>
					<div>Mountain Climbing</div>
					<div>Cardio</div>
				</div>
			</div>
		)
	}
}

class Button extends React.Component {
	render() {
		return(
			<div className='button-group2'>
				<div>
					<button type='button' className='btn-start addstyle'>Submit</button>
				</div>
				<div>
					<button type='button' className='btn-skip'>SKIP</button>
				</div>
			</div>
		)
	}
}
export default OnBoarding_Page4;