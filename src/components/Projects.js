import React from "react";
import Thumbnail from "../components/Thumbnail.js"; // Import the Thumbnail component
import tntColor from "../assets/img/tnt-ds-colors.png";
import callbotThumb from "../assets/img/callbot-thumb.jpg";
import davinciThumb from "../assets/img/davinci-thumb.jpg";
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
      <div className="work">
        <div className="work__main">
            <Thumbnail
            link="/tnt-design-system"
            image={callbotThumb}
            title="Callbot"
            category="Data Visualization"
          />
        </div>
        <div className="work__second">
        <Thumbnail
            link="/tnt-design-system"
            image={tntColor}
            title="TNT Design System"
            category="Design Infrastructure"
          />
        </div>
                  <div className="work__third">
      
           <Thumbnail
            link="/tnt-design-system"
            image={davinciThumb}
            title="Da Vinci"
            category="Web Application"
          />
        </div>
      </div>
    </div>
  );
}
console.log("projects" + tntColor);

export default Projects;
