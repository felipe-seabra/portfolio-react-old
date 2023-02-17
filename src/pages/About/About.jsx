import React, { useEffect } from 'react';
import profileImg from '../../images/profile.jpg';
import './style/About.scss';

const URL_LINKEDIN = 'https://www.linkedin.com/in/felipe-seabra';

export default function About() {
  function setPageTitle() {
    document.title = 'Sobre - Felipe Seabra';
  }

  useEffect(setPageTitle, []);

  return (
    <section className="background-color-grey">
      <div className="container mt-5 about">
        <img
          className="img-fluid about__picture"
          src={ profileImg }
          alt="Foto Felipe Seabra"
        />
        <div className="about__text mt-3">
          <h2>Sobre Mim</h2>
          <p>
            Natural de Presidente Prudente (SP), tenho aproximadamente 10 anos de
            experiência atuando em diversas áreas de tecnologia em educação.
          </p>
          <p>
            Apesar de hoje me identificar mais com o
            {' '}
            <strong>Front-end</strong>
            , acredito que com esforço e dedicação eu posso aprender qualquer coisa.
          </p>
          <a
            className="btn"
            href={ URL_LINKEDIN }
            target="_blank"
            rel="noreferrer"
          >
            Vamos conversar
          </a>
        </div>
      </div>
    </section>
  );
}
