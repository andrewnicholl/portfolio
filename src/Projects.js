import React from "react"
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import './App.scss';

function Projects(props) {
  return (
    <div>
      <h1>Projects</h1>
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
  )
}
 
export default Projects;