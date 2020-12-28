import React from 'react'
import './onboarding.css';


class OnBoarding_Page2 extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Text />
				<Input />
				<Button />
			</div>
		)
	}
}
class Header extends React.Component {
	render() {
		return (
			<div className='header-sign'>
				<div className='process process-active'>1</div>
				<div className='line'></div>
				<div className='process'>2</div>
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
						Let's start with your
					</div>
					<div>
						First and Last Name
					</div>
				</div>
				<div>
					<div className='content-text-below-page2'>
						Your name is required so we could
					</div>
					<div className='content-text-below-page2'>
						identity you.
					</div>
				</div>
			</div>
		)
	}
}
class Input extends React.Component {
	render() {
		return (
			<div className='input-field'>
				<div className='input-name'>
					<label>FIRST NAME</label>
					<input type='text' placeholder='The name people calls you' />
				</div>
				<div className='error'>
					* This is a validation error
				</div>
				<div className='input-name'>
					<label>LAST NAME</label>
					<input type='text' placeholder='Your family name' />
				</div>
				<div className='error'>
					* This is a validation error
				</div>
			</div>
		)
	}
}
class Button extends React.Component {
	render() {
		return(
			<div className='button-group'>
				<div>
					<button type='button' className='btn btn-next'>NEXT</button>
				</div>
				<div>
					<button type='button' className='btn-skip'>SKIP</button>
				</div>
			</div>
		)
	}
}
export default OnBoarding_Page2;