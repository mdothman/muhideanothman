import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Home,NoMatch} from './pages'

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}));


const App=()=> {
  const classes = useStyles()
  return (
    <Router>
      <div className="App">
      <div className={classes.root}>
            <Switch>
              <Route exact path="/">
                <Home />
                </Route>
              <Route component={NoMatch} />
            </Switch>
      </div>
       
      </div>
    </Router>
   
  );
}

export default App;
