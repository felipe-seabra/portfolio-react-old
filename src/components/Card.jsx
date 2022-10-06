import React from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import '../styles/components/Card.css';

export default class Card extends React.Component {
  render() {
    const { name, image, description, url, isLoaded } = this.props;
    return (
      <div className="card">
        {!isLoaded ? (
          <Loading />
        ) : (
          <div className="card-bg">
            <img className="card-img-top" src={ image } alt={ name } />
            <div className="card-body">
              <h3 className="card-title">{name}</h3>
              <p className="card-text">{description}</p>
              <a href={ url } target="_blank" className="btn mt-2" rel="noreferrer">
                Visitar Repositório
              </a>
            </div>
          </div>
        )}
      </div>
    );
  }
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  isLoaded: PropTypes.bool.isRequired,
};
