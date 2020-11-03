import Header from "./components/Header/Header";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Projects from "./pages/Projects/Projects";
import Home from "./pages/Home/Home";
import Proficiencies from "./pages/Proficiencies/Proficiencies";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/proficiencies" component={Proficiencies} />
          <Route exact path="/contact" component={Contact} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
