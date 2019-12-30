import React from "react";
import Thumbnail from "../components/Thumbnail.js"; // Import the Thumbnail component
import tntColor from "../assets/img/tnt-ds-colors.png";
import "../App.scss";
import "../scss/components/projects.scss";

function Projects(props) {
  return (
    <div className="projects-container">
      <div className="hero">
        <div>
          <div className="hero__title">
            <h1 className="heading--large">Product Designer,</h1>
            <p className="heading--large">amongst other things.</p>
          </div>
          <p>
            I’m a design professional dedicated to creating accessible products
            that can scale with the needs of business and humans alike.
          </p>
        </div>
      </div>
      <div className="work">
        <div className="work__main">
          <Thumbnail
            link="/tnt-design-system"
            image={tntColor}
            title="TNT DESIGN SYSTEM"
            category="Design Systems"
          />
        </div>
        <div className="work__second">
          <Thumbnail
            link="/tnt-design-system"
            image={tntColor}
            title="TNT DESIGN SYSTEM"
            category="Design Systems"
          />
        </div>
        <div className="work__third">
          <Thumbnail
            link="/tnt-design-system"
            image={tntColor}
            title="TNT DESIGN SYSTEM"
            category="Design Systems"
          />
        </div>
      </div>
    </div>
  );
}
console.log("projects" + tntColor);

export default Projects;
