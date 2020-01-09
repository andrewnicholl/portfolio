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
        <Link to="/projects" className="button">
          <p className="paragraph">see projects</p>
          <div className="button__arrow">
            <div className="button__line1"></div>
            <div className="button__line2"></div>
            <div className="button__line3"></div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
