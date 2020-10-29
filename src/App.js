import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import GlobalStyles from "./util/GlobalStyles";

import About from "./pages/about/About";
import Home from "./pages/home/Home";
import NavBar from "./components/nav-bar/NavBar";

function App() {
  return (
    <Router>
      <div>
        <GlobalStyles></GlobalStyles>
        <NavBar>
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
        </NavBar>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" exact component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
