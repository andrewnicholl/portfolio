import React from "react";
import Thumbnail from "../components/Thumbnail.js"; // Import the Thumbnail component
import tntColor from "../assets/img/tnt-ds-colors.png";
import callbotThumb from "../assets/img/callbot-thumb.jpg";
import davinciThumb from "../assets/img/davinci-thumb.jpg";
import "../App.scss";
import "../scss/components/_thumbs.scss";

function Thumbs(props) {
  return (
    <div className="thumbs">
      <div className="thumbs__main">
        <Thumbnail
          link="/callbot"
          image={callbotThumb}
          title="Callbot"
          category="Data Visualization"
        />
      </div>
      <div className="thumbs__second">
        <Thumbnail
          link="/tnt-design-system"
          image={tntColor}
          title="TNT Design System"
          category="Design Infrastructure"
        />
      </div>
      <div className="thumbs__third">
        <Thumbnail
          link="/da-vinci"
          image={davinciThumb}
          title="Da Vinci"
          category="Web Application"
        />
      </div>
    </div>
  );
}
console.log("projects" + tntColor);

export default Thumbs;
