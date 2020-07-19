import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link,AppBar,Toolbar,Button,IconButton} from '@material-ui/core/';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  emailIcon:{
    position:"static",
    marginRight: theme.spacing(2),
  },
  linkedInIcon:{
    position:"static",
    marginRight: theme.spacing(2),
  },
  gitHubIcon:{
    position:"static",
    marginRight: theme.spacing(2),
  },
  resumeButton: {
    color:"inherit",
    hover:{
      backgroundColor:"white",
      borderRadius:"3px"

    }
  },
}));
function copyEmailAddress(e){
  e.preventDefault();
  navigator.clipboard.writeText("othmanmuhidean@gmail.com")
  .then(alert("Email was copied"))
console.log("The button was clicked")
}

export default function Nav() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar variant="dense">
        
          <Link color="inherit" href="https://github.com/mdothman">
            <IconButton edge="start" className={classes.gitHubIcon} color="inherit" aria-label="menu">
            <GitHubIcon />
          </IconButton>
          </Link>

          <Link color="inherit" href="https://www.linkedin.com/in/dean-othman-76353a124/">
          <IconButton edge="start" className={classes.linkedInIcon} color="inherit" aria-label="menu">
           <LinkedInIcon />
          </IconButton>
          </Link>

          <IconButton edge="start" onClick={copyEmailAddress}className={classes.gitHubIcon} color="inherit" aria-label="menu">
           <EmailIcon />
          </IconButton>
          
          <Button className={classes.resumeButton}>Resume.pdf</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
