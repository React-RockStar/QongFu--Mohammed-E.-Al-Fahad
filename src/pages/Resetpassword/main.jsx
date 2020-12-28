import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import {Link} from 'react-router-dom';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};


const useStyles = makeStyles(theme => ({
    root: {
        backgroundImage: 'url("./assets/Image 2.png")',
        backgroundRepeat: "no-repeat",
        flexGlow:1,
        height:1000,
        width:'100%',
      },
      logo: {
        left:'5%',
        top:'30px',
        position:'absolute',
      },
    
    
      link: {
        right:'10%',
        top: '45px',
        position:'absolute',
        fontSize:'20px',
      },
  Paper :{
    margin: 'auto',
    maxWidth : 420,
    position:'relative',
    marginTop:200,
  },
  p :{
    color:'#919191',
    display:'inline-block',
    fontSize:'12px',
  },
  p1 :{
    fontSize:'12px',
  },

  email: {
    width: '100%',
  },
  notchedOutline: {
    borderRadius: '30px',
  },
  fab: {
    marginLeft:'20%',
    width: '60%',
  },
  icon: {
      marginRight: '15%',
  },
  hr: {
    display: 'inline-block',
  },
  
  
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value] = React.useState(0);


  return (
    
    <div className={classes.root}>
    <img src="Layer 2.svg" alt="logo" className={classes.logo}/>
    <Link to='/' className={classes.link}>
        Back to home
    </Link>
    <Paper className={classes.Paper}>
      
        <TabPanel value={value} index={0} dir={theme.direction}>
            <Typography variant="h5" component="h2" color="textSecondary" align="center">
                Reset Password
            </Typography><br></br>

            <Typography color="textSecondary" align="center" className={classes.p1}>
                You can now enter your new password
            </Typography><br></br>
            
            <TextField
                label="password"
                className={classes.email}
                type="New password"
                name="password"
                autoComplete="password"
                margin="normal"
                variant="outlined"
                placeholder="Your secured password"
                InputProps={{
                    classes: {
                    notchedOutline: classes.notchedOutline,
                    },
                }}
            />
            <TextField
                label="Confirm new password"
                className={classes.email}
                type="password"
                name="password"
                autoComplete="password"
                margin="normal"
                variant="outlined"
                placeholder="Your secured password"
                InputProps={{
                    classes: {
                    notchedOutline: classes.notchedOutline,
                    },
                }}
            /><br></br><br></br>

            <Fab variant="extended" aria-label="delete" className={classes.fab} color="primary">
                CONFIRM
            </Fab><br></br><br></br>
        </TabPanel>
      </Paper>
    </div>
  );
}
