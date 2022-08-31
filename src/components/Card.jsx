import React from "react";
import Loading from "./Loading";

export default class Card extends React.Component {
  state = {
    loading: true,
  };
  render() {
    const { name, image, description, url } = this.props;
    return (
      <div className="card">
        {loading ? (
          <Loading />
        ) : (
          <div className="card-bg">
            <img className="card-img-top" src={image} alt={name} />
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{description}</p>
              <a href={url} target="_blank" className="btn" rel="noreferrer">
                Visitar
              </a>
            </div>
          </div>
        )}
      </div>
    );
  }
}
