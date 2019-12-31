import React from "react"; // Import the Component component from React
import { Link } from "react-router-dom"; // Import the Link component
import "../App.scss";
import "../scss/components/_thumbnail.scss";

function Thumbnail(props) {
  return (
    <Link to="{props.link}">
      <div className="project">
        <div className="project__text">
          <div className="project__text_title paragraph">{props.title}</div>
          <div className="project__text_category paragraph">
            {props.category}
          </div>
        </div>
        <div
          className="project__image"
          style={{ backgroundImage: `url(${props.image}` }}
        ></div>

      </div>
    </Link>
  );
}

export default Thumbnail;
