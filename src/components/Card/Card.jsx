import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../Loading';
import './style/Card.scss';

function Card(props) {
  const { name, image, description, url, isLoaded } = props;
  return (
    <div id="card">
      {!isLoaded ? (
        <Loading />
      ) : (
        <div>
          <img src={ image } alt={ name } />
          <div className="card-body">
            <h3>{name}</h3>
            <p>{description}</p>
            <a href={ url } target="_blank" className="btn mt-2" rel="noreferrer">
              Visitar Repositório
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  isLoaded: PropTypes.bool,
}.isRequired;

export default Card;
