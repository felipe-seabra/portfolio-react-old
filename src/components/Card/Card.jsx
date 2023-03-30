import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../Loading';
import './style/Card.scss';

function Card({ name, description, isLoaded }) {
  const url = `https://github.com/felipe-seabra/${name}`;
  const newName = name.replace(/^Trybe-/, '')
    .replace(/-/g, ' ')
    .replace(/(^|\s)\S/g, (firstLetter) => firstLetter.toUpperCase());

  return (
    <div id="card">
      {!isLoaded ? (
        <Loading />
      ) : (
        <div className="card-body">
          <h3>{newName}</h3>
          <p>{description}</p>
          <a href={ url } target="_blank" rel="noreferrer" className="btn mt-2">
            Visitar Repositório
          </a>
        </div>
      )}
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isLoaded: PropTypes.bool.isRequired,
};

export default Card;
