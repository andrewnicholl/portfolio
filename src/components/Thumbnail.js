import React from "react"; // Import the Component component from React
import { Link } from "react-router-dom"; // Import the Link component
import "../App.scss";
import "../scss/components/thumbnail.scss";


function Thumbnail(props) {
  return (
    <div className="project">
      <Link to="{props.link}">
        <div>
          <img src={props.image} alt="Project Image"  className="project__image"/>
        </div>
        <div className="project__title">{props.title}</div>
        <div className="project__category">{props.category}</div>
      </Link>
    </div>
  );
}

// console.log('thumbnail' + tntColor)
export default Thumbnail;
