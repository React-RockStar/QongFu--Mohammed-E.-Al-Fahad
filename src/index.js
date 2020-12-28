import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch, Redirect } from "react-router-dom";
import Landing from './pages/1_Landing/Landing.jsx';
import Place from './pages/Places/main';
import Fitness from './pages/Fitness/main';
import * as serviceWorker from './serviceWorker';
import Login from './pages/Login/main';
import Email from './pages/Email/main';
import InputCode from './pages/Input_code/main';
import Reset from './pages/Resetpassword/main';
import GoogleMap from './pages/Googlemap/main';
import Success from './pages/Resetpassword/success';
import OnBoarding from './pages/onboarding/main';
import OnBoarding_Page2 from './pages/onboarding/onboarding_page2';
import OnBoarding_Page3 from './pages/onboarding/onboarding_page3';
import OnBoarding_Page4 from './pages/onboarding/onboarding_page4';
import OnBoarding_Page5 from './pages/onboarding/onboarding_page5';
import { tsConstructorType } from '@babel/types';
import { createBrowserHistory } from "history";


var hist = createBrowserHistory();
ReactDOM.render(
    <Router history={hist}>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/place" component={Place} />
        <Route path="/fitness" component={Fitness} />
        <Route path="/login" component={Login} />
        <Route path="/success" component={Success} />
        <Route path="/email" component={Email}></Route>
        <Route path="/inputcode" component={InputCode}></Route>
        <Route path="/reset" component={Reset}></Route>
        <Route path="/googlemap" component={GoogleMap}></Route> 
        <Route path="/onboarding/page1" component={OnBoarding}></Route> 
        <Route path="/onboarding/page2" component={OnBoarding_Page2}></Route> 
        <Route path="/onboarding/page3" component={OnBoarding_Page3}></Route> 
        <Route path="/onboarding/page4" component={OnBoarding_Page4}></Route> 
        <Route path="/onboarding/page5" component={OnBoarding_Page5}></Route> 
        
      </Switch>
    </Router>,
  document.getElementById("slide")
);

// ReactDOM.render(<Landing />, document.getElementById('slide'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

