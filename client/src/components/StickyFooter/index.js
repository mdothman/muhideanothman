import React from 'react';
import Paper from "@material-ui/core/Paper"
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Link,IconButton} from '@material-ui/core/';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }



function copyEmailAddress(e){
  e.preventDefault();
  navigator.clipboard.writeText("othmanmuhidean@gmail.com")
  .then(alert("Email was copied"))
console.log("The button was clicked")
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

          <IconButton edge="start" onClick={copyEmailAddress}className={classes.gitHubIcon} color="inherit" aria-label="menu">
          <Typography variant="body1">Copy My Email Address</Typography>
           <EmailIcon />
          </IconButton>
        </Container>
      </div>
   </Paper>
     
  );
}