import React from 'react';
import './onboarding.css';

class OnBoarding extends React.Component {
   render() {
      return (
         <div>
            <Header />
            <Img/>
            <Content_1 />
            <Content_2 />
            <Button />
         </div>
      );
   }
}
class Header extends React.Component {
   render() {
      return (
         <div className="header-text">
            Welcome to Qongfu
         </div>
      )
   }
}
class Img extends React.Component {
   render() {
      return (
         <div className='img'>
            <img src='../qongfu_icon.png'/>
         </div>
      );
   }
}
class Content_1 extends React.Component {
   render() {
      return (
         <div className='content-text'>
            Let's get you onboard!
         </div>
      );
   }
}
class Content_2 extends React.Component {
   render() {
      return (
         <div>
            <div className='content-text-below'>
               Lorem ipsum dolor sit amen consecteur 
            </div>
            <div className='content-text-below'>
               Lipzig ishlah.
            </div>
         </div>
      );
   }
}
class Button extends React.Component {
   render() {
      return (
         <div className='btn-div'>
            <button className='btn-start'>LET’S GET STARTED</button>
         </div>
      )
   }
}
export default OnBoarding;