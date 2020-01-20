import React from "react";
import { Link } from "react-router-dom";
import Preview from "./Preview.js";
import callbotThumb from "../assets/img/callbot-blue.png";
import "../App.scss";
import "../scss/components/_home.scss";

function Home(props) {
  return (
    <div className="experiment">
      <div className="experiment__child">
        <div className="component-container">
          <div className="hero">
            <div className="hero__text">
              <h1 className="hero__title">Product Designer,</h1>
              <p className="hero__subtitle">amongst other things.</p>
              {/* <p className="hero__body paragraph">
                I’m a design professional dedicated to creating accessible
                products that can scale with the needs of business and humans
                alike.
              </p> */}
              <p className="hero__body paragraph">
                I’m in the process of rebuilding my website. In the meantime, check out my portfolio on LinkedIn.
              </p>
            </div>
            <a href="https://www.nicholldesign.com/andrewnicholl_portfolio.pdf" target="_blank" className="button">
              <p className="paragraph">see portfolio</p>
              <div className="button__arrow">
                <div className="button__line1"></div>
                <div className="button__line2"></div>
                <div className="button__line3"></div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
