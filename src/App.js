import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import NoMatch from "./pages/NoMatch";
import { StoreProvider } from "./utils/GlobalState";



function App() {
  return (
    <Router>
      <div className="App">
        <StoreProvider>
          <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
              <Route component={NoMatch} />
            </Switch>
        </StoreProvider>
      </div>
    </Router>
    
  );
}

export default App;
