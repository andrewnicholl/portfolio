import React from 'react';
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import Preview from './Preview.js'; // Import the Preview component
import tntColor from '../assets/img/tnt-ds-colors.png';
import callbotThumb from '../assets/img/callbot-thumb.jpg';
import davinciThumb from '../assets/img/davinci-thumb.jpg';
import '../App.scss';
import '../scss/components/_projects.scss';

function Thumbs(props) {
  return (
    <div className="component-container">
      <Preview
        title="Callbot"
        subtitle="Web Application"
        description="This is a description."
        image={tntColor}
        alt="callbot icon"
        btnText="view case study"
      />
    </div>
  );
}
console.log('projects' + tntColor);

export default Thumbs;
