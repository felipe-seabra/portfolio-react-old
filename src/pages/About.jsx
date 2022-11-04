/* eslint-disable react/jsx-max-depth */
import React from 'react';
import image from '../images/image.jpg';
import '../styles/pages/About.css';

export default class About extends React.Component {
  componentDidMount() {
    document.title = 'Sobre - Felipe Seabra';
  }

  render() {
    const linkedin = 'https://www.linkedin.com/in/felipe-seabra';

    return (
      <section className="background-color-grey">
        <div className="container">
          <div className="about row">
            <img
              className="about-picture img-fluid"
              src={ image }
              alt="Foto Felipe Seabra"
            />
            <div className="about-text mt-3">
              <h2>Sobre Mim</h2>
              <p>
                Natural de Presidente Prudente (SP), tenho aproximadamente 10 anos de
                experiência atuando em diversas áreas de tecnologia em educação.
              </p>
              <p>
                Apesar de hoje me identificar mais com o
                {' '}
                <strong>Front-end</strong>
                , vejo que não há nada que eu não consiga
                {' '}
                <em>fazer/aprender</em>
                .
              </p>
              <a className="btn" target="_blank" href={ linkedin } rel="noreferrer">
                Vamos conversar
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
