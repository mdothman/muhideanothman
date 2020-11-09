import React from "react"
import {Nav,HeroUnit,StickyFooter,CodeCard}  from "../components";
import {Container} from '@material-ui/core';

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

const Home = () =>{
  const classes = useStyles();
return(
<div>

  <Nav />
  <HeroUnit />
  <Container className={classes.cardGrid} width="md">
    <CodeCard />
  </Container>
  <StickyFooter />
 </div>
);
};

export default Home
