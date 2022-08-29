import React from "react";

export default class Card extends React.Component {
  render() {
    const { name, image, description, url } = this.props;
    return (
      <div className="card">
        <div className="card-bg">
          <img className="card-img-top" src={image} alt={name} />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
            <a href={url} className="btn">
              Visitar
            </a>
          </div>
        </div>
      </div>
    );
  }
}
