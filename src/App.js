import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Projects from "./Projects.js";
import Articles from "./Articles.js";
import About from "./About.js";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="navigation">
          {/* <img src={logo} className="logo" alt="Logo Image" /> */}
          <p>andrew nicholl</p>
          <div className="navigation__links">
            <Link to="/" className="navigation__links_item">
              work
            </Link>
            <Link to="/articles" className="navigation__links_item">
              about
            </Link>
            <Link to="/about" className="navigation__links_item">
              contact
            </Link>
          </div>
        </div>
        <Route exact path="/" component={Projects} />
        <Route path="/articles" component={Articles} />
        <Route path="/about" component={About} />
      </div>
    </BrowserRouter>
  );
}

export default App;
