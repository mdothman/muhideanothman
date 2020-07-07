import React from "react";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Portfolio from '../components/Portfolio'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    borderRadius: 3,
    border: 0,
    padding: '0 30px',
    color:'white'
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
  <main> 
    <div className="main"><Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Muhi-Dean Othman
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'Determination, Integrity, and Creativity.'}
        </Typography>
        <Typography variant="body1">"The best way to predict the future is, to create it." —Abraham Lincoln</Typography>
      </Container>
      </div>
    <Container className={classes.cardGrid} maxWidth="md">
        <Portfolio />
      </Container></main>
   
      



);
};

export default Home;
