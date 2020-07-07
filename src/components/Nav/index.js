import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
  emailIcon:{
    position:"static"
  },
  linkedInIcon:{
    position:"static",
    // marginRight: theme.spacing(2),
  },
  gitHubIcon:{
    position:"static",
    // marginRight: theme.spacing(2),
  },
  // menuButton: {
    // position: "static",
    // marginRight: theme.spacing(.5),
  // },
}));

export default function Nav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
            
          </IconButton> */}
          <IconButton edge="start" className={classes.gitHubIcon} color="inherit" aria-label="menu">
            <GitHubIcon />
            
          </IconButton>
          <IconButton edge="start" className={classes.linkedInIcon} color="inherit" aria-label="menu">
            <LinkedInIcon />
            
          </IconButton>
          <IconButton edge="start" className={classes.gitHubIcon} color="inherit" aria-label="menu">
            <EmailIcon />
            
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
