import React from "react";
import Thumbnail from "../Thumbnail.js"; // Import the Thumbnail component
import tntColor from "../assets/img/tnt-ds-colors.png";
import "../App.scss";
import "../scss/components/projects.scss";

function Projects(props) {
  return (
    <div className="projects">
      <div className="projects__main">
        <div>
          <div className="projects__main_title">
            <h1 className="heading--large">Product Designer,</h1>
            <p className="heading--large">amongst other things.</p>
          </div>
          <p>
            I’m a design professional dedicated to creating accessible products
            that can scale with the needs of business and humans alike.
          </p>
        </div>
      </div>
      <div>
        <Thumbnail
          link="/tnt-design-system"
          image={tntColor}
          title="TNT DESIGN SYSTEM"
          category="Design Systems"
        />

        <Thumbnail
          link="/airbnb"
          image=""
          title="Airbnb Experiences"
          category="Website"
        />

        <Thumbnail
          link="/photoshop"
          image=""
          title="Photoshop Redesign"
          category="Desktop App"
        />
      </div>
    </div>
  );
}
console.log('projects' + tntColor)

export default Projects;
