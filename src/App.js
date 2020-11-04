import Header from "./components/Header/Header";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Projects from "./pages/Projects/Projects";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <Switch>
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/contact" component={Contact} />
                <Route path="/" component={Home} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
