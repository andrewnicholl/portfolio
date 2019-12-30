import React from "react"; // Import the Component component from React
import { Link } from "react-router-dom"; // Import the Link component
import "../App.scss";
import "../scss/components/thumbnail.scss";

function Thumbnail(props) {
  return (
    <Link to="{props.link}">
      <div
        className="project"
        style={{ backgroundImage: `url(${props.image}` }}
      >
        <div className="project__text">
          <div className="project__text_title">{props.title}</div>
          <div className="project__text_category">{props.category}</div>
        </div>
      </div>
    </Link>
  );
}

export default Thumbnail;
