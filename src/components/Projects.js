import React from "react";
import Thumbs from "./Thumbs.js"
import "../App.scss";
import "../scss/components/_projects.scss";

function Projects(props) {
  return (
    <div className="projects-container">
      <div className="hero">
        <div>
          <div className="hero__title">
            <h1 className="heading--large">Product Designer,</h1>
            <p className="heading--large">amongst other things.</p>
          </div>
          <p className="paragraph">
            I’m a design professional dedicated to creating accessible products
            that can scale with the needs of business and humans alike.
          </p>
        </div>
      </div>

      {/* { this.state.show ? <Thumbs/> : null } */}
      <Thumbs/>
    </div>
  );
}

export default Projects;
