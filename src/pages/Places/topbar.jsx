import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
    height:'100px',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    padding: '2px 4px',
    display: 'inline-block',
    alignItems: 'center',
    width: '27%',
    marginRight:'20px',
    borderRadius:'24px',
  },
  searchdivider: {
    height: 28,
    margin: 4,
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 4,
    width:'60%',
  },

  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [setAnchorEl] = React.useState(null);
  const [setMobileMoreAnchorEl] = React.useState(null);

  function handleProfileMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  }



  function handleMobileMenuOpen(event) {
    setMobileMoreAnchorEl(event.currentTarget);
  }

  const menuId = 'primary-search-account-menu';

  const mobileMenuId = 'primary-search-account-menu-mobile';

  return (
    <div className={classes.grow}>
      < AppBar position="static" color="inherit">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <img src="Layer 2.svg" alt="logo" className={classes.logo}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Paper className={classes.search}>
              <IconButton className={classes.iconButton} aria-label="search" color="primary">
                <SearchIcon />
              </IconButton>
              <Typography variant="h7" color="primary"><b>Fitness</b></Typography>
              <InputBase
                className={classes.input}
                placeholder="Place name, location, instructor"
                inputProps={{ 'aria-label': 'search google maps' }}
              />
            </Paper>
          <div className={classes.grow} />

          <div className={classes.topButtons}>
              <Grid container spacing={2} justify="flex-end">
                <Grid item>
                  <Link href="#" variant="h6" className={classes.link}>
                    Explore
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="h6" className={classes.link}>
                    Places
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="h6" className={classes.link}>
                    Specialists
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="h6" className={classes.link}>
                    Map
                  </Link>
                </Grid>

              </Grid>
            </div>

          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 17 new notifications" color="primary">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
            <Grid container justify="center" alignItems="center">
                <Avatar alt="Remy Sharp" src="avatar.png" className={classes.bigAvatar} />
            </Grid>
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
