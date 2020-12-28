import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 425,
    },
    martialArts: {
        float:'left',
        width: 300,
        backgroundColor:'#d4daf2',
        height: 150,
    },
    fitness: {
        float:'left',
        marginLeft:20,
        width: 130,
        backgroundColor:'#caf2db',
        height: 150,
    },
    health: {
        float:'left',
        marginLeft: 20,
        backgroundColor: '#e9f2ca',
        width: 130,
        height: 150,
    },
}));

export default function PaperSheet() {
  const classes = useStyles();

  return (
      <Paper className={classes.root}>
        
        <Grid container spacing={3}>
            <Grid item xs={6}>
                <Typography variant="h5" component="h3" align="left">
                    About Us
                </Typography><br></br>
                <Typography component="p" align="left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sad do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Nunc sed augue lacus viverra vitae congue eu consequat. Lorem ipsum dolor ait amet, cnsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Nunc sed augue lacus viverra vitae congue eu consequat.
                </Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography variant="h5" component="h3" align="left">
                    More Info
                </Typography><br></br>
                <Typography component="p" align="left">
                    Languages  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                    <br></br><br></br><br></br>
                    Accepts &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                </Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography variant="h5" component="h3" align="left">
                    More Info
                </Typography><br></br>
                <Typography component="p" align="left">
                    English, Arabic, and Urdu
                    <br></br><br></br><br></br>
                    Adult male and female (mixed)
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h5" component="h3" align="left">
                    Lifestyles & Qongfu
                </Typography><br></br>
                <div className={classes.martialArts}>
                    
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <Typography variant="p" component="h3" align="left">
                                Martial Arts
                            </Typography><br></br>
                            <Typography align="left">
                                Karate<br></br>
                                Take Kwon Do<br></br>
                                Boxing<br></br>
                                Gun shooting<br></br>
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <br></br><br></br>
                            <Typography align="left">
                                Kickboxing<br></br>
                                Jujilsu
                            </Typography>
                            
                        </Grid>
                    </Grid>
                </div>
                <div className={classes.fitness}>
                    <Typography variant="p" component="h3" align="left">
                        Fitness
                    </Typography><br></br>
                    <Typography align="left">
                        Running<br></br>
                        Jump Rope<br></br>
                        Cycling
                    </Typography>
                    
                </div>
                <div className={classes.health}>
                    <Typography variant="p" component="h3" align="left">
                        Health
                    </Typography><br></br>
                    <Typography align="left">
                        Yoga<br></br>
                        Lorem Ipsum<br></br>
                        Dolor Sit Amet<br></br>
                        Consecteur
                    </Typography>
                </div>
            </Grid>
        </Grid>
        
      </Paper>
  );
}
