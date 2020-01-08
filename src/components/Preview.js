import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/components/_preview.scss';

function Preview(props) {
  return (
    <div className="preview-container">
      <div className="preview">
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
        <p>{props.description}</p>
      </div>
      <img src={props.image} alt={props.alt} className="preview__image"/>
      <div>
        <Link to="/projects" className="hero__link">
          <p className="paragraph">{props.btnText}</p>
          <div className="hero__arrow">
            <div className="hero__line1"></div>
            <div className="hero__line2"></div>
            <div className="hero__line3"></div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Preview;
