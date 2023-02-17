import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../Loading';
import './style/Card.scss';

function Card({ name, image, description, url, isLoaded }) {
  return (
    <div id="card">
      {!isLoaded ? (
        <Loading />
      ) : (
        <>
          <img src={ image } alt={ name } />
          <div className="card-body">
            <h3>{name}</h3>
            <p>{description}</p>
            <a href={ url } target="_blank" rel="noreferrer" className="btn mt-2">
              Visitar Repositório
            </a>
          </div>
        </>
      )}
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  isLoaded: PropTypes.bool.isRequired,
};

export default Card;
