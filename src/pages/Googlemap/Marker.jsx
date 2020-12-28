import React from 'react';
import './Marker.css';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { getThemeProps } from '@material-ui/styles';

const Marker = (props) => {
    return (
      <div className={props.name}
        style={{ cursor: 'pointer'}}
        title="adfsafas">
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <img src="./assets/brand.png" className="image"/>
                </Grid>
                <Grid item xs={9}>
                    <p className="content">
                        <b className="title">Bull Fitness Gym</b><br></br>
                        <span className="status">OPEN </span>&nbsp;<span className="time"> | 08:00am - 10.00pm<br></br>
                        5.47km - Manama, Bahrain</span>
                    </p>
                </Grid>
            </Grid>
      </div>
    );
  };

  export default Marker;