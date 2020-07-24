import React, {useState} from 'react';
import Paper from "@material-ui/core/Paper"
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Link,IconButton} from '@material-ui/core/';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}



const useStyles = makeStyles((theme) => ({
 footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
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

export default function StickyFooter() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    navigator.clipboard.writeText("othmanmuhidean@gmail.com")
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Paper className={classes.footer}>
       <div>
        <Container maxWidth="sm">
          
          <Link color="inherit" href="https://github.com/mdothman">
            
            <IconButton edge="start" className={classes.gitHubIcon} color="inherit" aria-label="menu">
              <Typography variant="body1">My Github</Typography>
            <GitHubIcon />
          </IconButton>
          </Link>

          <Link color="inherit" href="https://www.linkedin.com/in/dean-othman-76353a124/">
          
          <IconButton edge="start" className={classes.linkedInIcon} color="inherit" aria-label="menu">
            <Typography variant="body1">My Linked In Profile</Typography>
           <LinkedInIcon />
          </IconButton>
          </Link>


      <IconButton aria-label="menu" variant="body1"color="inherit" onClick={handleClick}>
      <Typography variant="body1">Copy My Email Address</Typography>  
      <EmailIcon />
      </IconButton>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          You copied "othmanmuhidean@gmail.com" to your clipboard!
        </Alert>
      </Snackbar>
          
        </Container>
      </div>
   </Paper>
     
  );
}