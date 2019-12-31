import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Projects from "./components/Projects.js";
import Articles from "./components/Articles.js";
import About from "./components/About.js";
import "./App.scss";
import "./scss/components/_navigation.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="navigation">
          {/* <img src={logo} className="logo" alt="Logo Image" /> */}
          <Link to="/" className="navigation__links_item">
            andrew nicholl
            <div className="navigation__links_item_hidden">
              <p>back to home</p>
            </div>
          </Link>
          <div className="navigation__links">
            <Link to="/" className="navigation__links_item">
              work
              <div className="navigation__links_item_underline"></div>
            </Link>
            <Link to="/articles" className="navigation__links_item">
              about
              <div className="navigation__links_item_underline"></div>
            </Link>
            <Link to="/about" className="navigation__links_item">
              contact
              <div className="navigation__links_item_underline"></div>
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
