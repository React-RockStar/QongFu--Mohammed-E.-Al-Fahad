import React from 'react';
import Topbar from './topbar';
import MobileTopbar from '../../components/mobiletopbar';
import Contentbar from './contentbar';
import './style.css';



class Main extends React.Component{
  render(){
      return(
        <React.Fragment>
          <div id="Topbar">
            <Topbar/>
          </div>
          <div id="MobileTopbar">
            <MobileTopbar/>
          </div>
          <Contentbar/>
        </React.Fragment> 
      );
  }
}

export default Main;
