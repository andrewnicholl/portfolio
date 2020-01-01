import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Projects from "./components/Projects.js";
import Contact from "./components/Contact.js";
import About from "./components/About.js";
import "./App.scss";
import "./scss/components/_navigation.scss";

function App() {
  
  return (
    <BrowserRouter>
      <div className="app">
        <div className="navigation">
          {/* <img src={logo} className="logo" alt="Logo Image" /> */}
          <Link to="/" className="navigation__home">
            andrew nicholl
            <div className="navigation__home_hidden">
              <p>back to home</p>
            </div>
          </Link>

          <button className="navigation__hamburger">
            <div className="navigation__hamburger_lines navigation__hamburger_lines_1"></div>
            <div className="navigation__hamburger_lines navigation__hamburger_lines_2"></div>
          </button>

          <div className="navigation__links">
            <Link to="/" className="navigation__links_item">
              work
              <div className="navigation__links_item_underline"></div>
            </Link>
            <Link to="/about" className="navigation__links_item">
              about
              <div className="navigation__links_item_underline"></div>
            </Link>
            <Link to="/contact" className="navigation__links_item">
              contact
              <div className="navigation__links_item_underline"></div>
            </Link>
          </div>
        </div>

        <Route exact path="/" component={Projects} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    </BrowserRouter>
  );
}

export default App;
