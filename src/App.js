import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./components/Home.js";
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
          <Link to="/" className="navigation__name">
            andrew nicholl
            <div className="navigation__home">
              <p>back to home</p>
            </div>
          </Link>

          <button className="navigation__hamburger">
            <div className="navigation__lines navigation__lines--margin"></div>
            <div className="navigation__lines navigation__lines"></div>
          </button>

          <div className="navigation__links">
            <Link to="/projects" className="navigation__item">
              work
              <div className="navigation__underline"></div>
            </Link>
            <Link to="/about" className="navigation__item">
              about
              <div className="navigation__underline"></div>
            </Link>
            <Link to="/contact" className="navigation__item">
              contact
              <div className="navigation__underline"></div>
            </Link>
          </div>
        </div>

            <Route exact path="/" component={Home} />
            {/* <Route path="/projects" component={Projects} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
