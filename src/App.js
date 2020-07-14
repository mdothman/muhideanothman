import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import ContactInfo from "./pages/ContactInfo";
import StickyFooter from "./components/StickyFooter"
import Nav from "./components/Nav";
import NoMatch from "./pages/NoMatch";
import { makeStyles } from '@material-ui/core/styles';
import { StoreProvider } from "./utils/GlobalState";
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
         <StoreProvider>
          <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/contact" component={ContactInfo} />
              <Route component={NoMatch} />
            </Switch>
            <StickyFooter />
        </StoreProvider></div>
       
      </div>
    </Router>
    
  );
}

export default App;
