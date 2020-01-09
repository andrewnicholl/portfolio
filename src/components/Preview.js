import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/components/_preview.scss';

function Preview(props) {
  return (
    <div className="preview-container preview-container__callbot">
      <div className="preview">
        <h1 className="heading--large">{props.title}</h1>
        <p className="heading--large">{props.subtitle}</p>
        <p className="paragraph">{props.description}</p>
      </div>
      <img src={props.image} alt={props.alt} className="preview__image" />
      <div>
        <Link to="/projects" className="button">
          <p className="paragraph">{props.btnText}</p>
          <div className="button__arrow">
            <div className="button__line1"></div>
            <div className="button__line2"></div>
            <div className="button__line3"></div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Preview;
