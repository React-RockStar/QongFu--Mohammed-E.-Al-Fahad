import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/Star';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import Avatar from '@material-ui/core/Avatar';
import Brightness1Icon from '@material-ui/icons/Brightness1';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 1500,
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
    bigAvatar: {
        margin: 10,
        width: 100,
        height: 100,
    },
    p: {
        fontSize: 14,
    },
    p1: {
        fontSize: 12,
    },

}));

export default function PaperSheet() {
  const classes = useStyles();

  return (
      <Paper className={classes.root}>
        
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Typography variant="h5" component="h3" align="left">
                            <b>Reviews and ratings</b>
                        </Typography><br></br><br></br>
                        <Grid container spacing={9}>
                            <Grid item xs={3}>
                            <Avatar alt="Remy Sharp" src="./assets/avatar.png" className={classes.bigAvatar} />
                            </Grid>
                            <Grid item xs={9}>
                            <Typography variant="h6" component="h3" align="left">
                                <b>Fermie Fonda</b>
                            </Typography>
                            <Typography variant="h6" component="h3" align="left" className={classes.p}>
                                Qongfu member
                            </Typography>
                            <Typography variant="h6" component="h3" align="left" className={classes.p1}>
                                <Brightness1Icon className={classes.p1}/> 24, April 2019<br></br>
                                <Brightness1Icon className={classes.p1}/> Manama, Bahrain<br></br>
                            </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <br></br><br></br><br></br><br></br>
                        <Typography component="p" align="left">
                            <StarIcon color="primary"/><StarIcon color="primary"/><StarIcon color="primary"/><StarIcon color="primary"/><StarBorderOutlinedIcon color="primary"/><br></br>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sad do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Nunc sed augue lacus viverra vitae congue eu consequat. Lorem ipsum dolor ait amet, cnsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Nunc sed augue lacus viverra vitae congue eu consequat.<br></br><br></br>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sad do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Nunc sed augue lacus viverra vitae congue eu consequat.
                        </Typography>
                        <br></br><br></br><br></br>
                    </Grid>
                </Grid>
                <Divider/>
            </Grid>

            <Grid item xs={12}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <br></br><br></br><br></br><br></br>
                        <Grid container spacing={9}>
                            <Grid item xs={3}>
                            <Avatar alt="Remy Sharp" src="./assets/avatar2.jpg" className={classes.bigAvatar} />
                            </Grid>
                            <Grid item xs={9}>
                            <Typography variant="h6" component="h3" align="left">
                                <b>John Doe</b>
                            </Typography>
                            <Typography variant="h6" component="h3" align="left" className={classes.p}>
                                Qongfu member
                            </Typography>
                            <Typography variant="h6" component="h3" align="left" className={classes.p1}>
                                <Brightness1Icon className={classes.p1}/> 3.00 pm - 24 April 2019<br></br>
                                <Brightness1Icon className={classes.p1}/> Manama, Bahrain<br></br>&nbsp;&nbsp;Memeber since 2019
                            </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <br></br><br></br><br></br><br></br>
                        <Typography component="p" align="left">
                            <StarIcon color="primary"/><StarIcon color="primary"/><StarIcon color="primary"/><StarIcon color="primary"/><StarBorderOutlinedIcon color="primary"/><br></br>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sad do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Nunc sed augue lacus viverra vitae congue eu consequat. Lorem ipsum dolor ait amet, cnsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Nunc sed augue lacus viverra vitae congue eu consequat.<br></br><br></br>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sad do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Nunc sed augue lacus viverra vitae congue eu consequat.
                        </Typography>
                        <br></br><br></br><br></br>
                    </Grid>
                </Grid>
                <Divider/>
            </Grid>

            <Grid item xs={12}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <br></br><br></br><br></br><br></br>
                        <Grid container spacing={9}>
                            <Grid item xs={3}>
                            <Avatar alt="Remy Sharp" src="./assets/avatar3.png" className={classes.bigAvatar} />
                            </Grid>
                            <Grid item xs={9}>
                            <Typography variant="h6" component="h3" align="left">
                                <b>Jane Doe</b>
                            </Typography>
                            <Typography variant="h6" component="h3" align="left" className={classes.p}>
                                Qongfu member
                            </Typography>
                            <Typography variant="h6" component="h3" align="left" className={classes.p1}>
                                <Brightness1Icon className={classes.p1}/> 3.00pm - 24, April 2019<br></br>
                                <Brightness1Icon className={classes.p1}/> Manama, Bahrain<br></br>Memeber since 2019
                            </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <br></br><br></br><br></br><br></br>
                        <Typography component="p" align="left">
                            <StarIcon color="primary"/><StarIcon color="primary"/><StarIcon color="primary"/><StarIcon color="primary"/><StarBorderOutlinedIcon color="primary"/><br></br>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sad do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Nunc sed augue lacus viverra vitae congue eu consequat. Lorem ipsum dolor ait amet, cnsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Nunc sed augue lacus viverra vitae congue eu consequat.<br></br><br></br>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sad do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Nunc sed augue lacus viverra vitae congue eu consequat.
                        </Typography>
                        <br></br><br></br><br></br>
                    </Grid>
                </Grid>
                <Divider/>
            </Grid>
        </Grid>
        
      </Paper>
  );
}
