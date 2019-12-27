import React from "react";
import Thumbnail from "./Thumbnail.js"; // Import the Thumbnail component
import "./App.scss";

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
            that can scale with the needs of business and humans alike. Other
            than that, I don’t take things too seriously.
          </p>
        </div>
      </div>
      <div>
        <Thumbnail
          link="/twitter"
          image="https://twitter-image-url.jpg"
          title="Twitter Newsfeed"
          category="Mobile App"
        />

        <Thumbnail
          link="/airbnb"
          image="https://airbnb-image-url.jpg>"
          title="Airbnb Experiences"
          category="Website"
        />

        <Thumbnail
          link="/photoshop"
          image="https://photoshop-image-url.jpg"
          title="Photoshop Redesign"
          category="Desktop App"
        />
      </div>
    </div>
  );
}

export default Projects;
