import React from "react";
import { Link } from "react-router-dom";
import "../App.scss";
import "../scss/components/_home.scss";

function Home(props) {
  return (
    <div className="component-container">
      <div className="hero">
        <div className="hero__text">
          <h1 className="hero__title">Product Designer,</h1>
          <p className="hero__subtitle">amongst other things.</p>
          <p className="hero__body paragraph">
            I’m a design professional dedicated to creating accessible products
            that can scale with the needs of business and humans alike.
          </p>
        </div>
        <Link to="/projects" className="hero__link">
          <p className="paragraph">see projects</p>
          <div className="hero__arrow">
            <div className="hero__line1"></div>
            <div className="hero__line2"></div>
            <div className="hero__line3"></div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
