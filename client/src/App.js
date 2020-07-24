import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";

import NoMatch from "./pages/NoMatch";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}));


function App() {
  const classes = useStyles()
  return (
    <Router>
      <div className="App">
      <div className={classes.root}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route component={NoMatch} />
            </Switch>
      </div>
       
      </div>
    </Router>
   
  );
}

export default App;
