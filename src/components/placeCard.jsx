import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import BeenhereIcon from '@material-ui/icons/Beenhere';
import { makeStyles } from '@material-ui/core/styles';




const useStyles = makeStyles(theme => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  star: {
    color: 'white',
  },
}));

export default function OutlinedTextFields() {
  const classes = useStyles();


  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image="gym.png"
        title="Image title"
      >
        <Typography align="right" className={classes.star}>
          <StarIcon fontSize="small" /><StarIcon fontSize="small" /><StarIcon fontSize="small" /><StarIcon fontSize="small" /><StarBorderIcon fontSize="small" />
          1,000 &nbsp;&nbsp;&nbsp;&nbsp;
            </Typography>
      </CardMedia>
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2" color="primary">
          <BeenhereIcon /><b>&nbsp;Maic's Golden Gym</b>
        </Typography>
        <Typography>
          <b className={classes.open}>OPEN</b> | <b>08:00am - 10:00pm</b>
        </Typography>
        <Typography>
          <b>5.47km</b> - Manama, Bahrain
            </Typography>
      </CardContent>
    </Card>
  );
}