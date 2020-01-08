import React from "react";
import Thumbnail from "./Thumbnail.js"; // Import the Thumbnail component
import tntColor from "../assets/img/tnt-ds-colors.png";
import callbotThumb from "../assets/img/callbot-thumb.jpg";
import davinciThumb from "../assets/img/davinci-thumb.jpg";
import "../App.scss";
import "../scss/components/_projects.scss";

function Thumbs(props) {
  return (
    <div className="component-container">
      <div className="projects">
        <div className="projects__main">
          <Thumbnail
            link="/callbot"
            image={callbotThumb}
            title="Callbot"
            category="Data Visualization"
          />
        </div>
        <div className="projects__second">
          <Thumbnail
            link="/tnt-design-system"
            image={tntColor}
            title="TNT Design System"
            category="Design Infrastructure"
          />
        </div>
        <div className="projects__third">
          <Thumbnail
            link="/da-vinci"
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

export default Thumbs;
