import React from 'react';
import Topbar from '../../components/topbar';
import Contentbar from './contentbar';
import MobileTopBar from '../../components/mobiletopbar';
import './style.css';



class Main extends React.Component{
  render(){
      return(
        <React.Fragment>
          <div id="TopBar">
            <Topbar/>
          </div>
          <div id="MobileTopBar">
            <MobileTopBar/>
          </div>
          <Contentbar/>
        </React.Fragment> 
      );
  }
}

export default Main;
