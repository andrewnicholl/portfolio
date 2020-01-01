import React from "react";
import Thumbs from "./Thumbs.js";
import "../App.scss";
import "../scss/components/_projects.scss";

function Projects(props) {
  return (
    <div className="projects-container">
      <div className="hero">
        <div className="hero__text">
          {/* <div className="hero__text_title"> */}
            <h1 className="hero__text_title">Product Designer,</h1>
            <p className="hero__text_subtitle">amongst other things.</p>
          {/* </div> */}
          <p className="paragraph">
            I’m a design professional dedicated to creating accessible products
            that can scale with the needs of business and humans alike.
          </p>
        </div>
        <button className="hero__link">
          <p className="paragraph">see projects
          </p>
          <div className="hero__link_arrow">
            <div className="hero__link_arrow_line1"></div>
            <div className="hero__link_arrow_line2"></div>
            <div className="hero__link_arrow_line3"></div>
          </div>
        </button>
      </div>

      {/* { this.state.show ? <Thumbs/> : null } */}
      <Thumbs />
    </div>
  );
}

export default Projects;
