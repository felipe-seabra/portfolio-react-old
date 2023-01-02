/* eslint-disable react/jsx-max-depth */
import React, { useEffect } from 'react';
import profile from '../../images/profile.jpg';
import './style/About.scss';

export default function About() {
  const URL_LINKEDIN = 'https://www.linkedin.com/in/felipe-seabra';

  useEffect(() => {
    document.title = 'Sobre - Felipe Seabra';
  }, []);

  return (
    <section className="background-color-grey">
      <div className="about container mt-5">
        <img
          className="about__picture img-fluid"
          src={ profile }
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
            , vejo que não há nada que eu não consiga
            {' '}
            <em>fazer/aprender</em>
            .
          </p>
          <a
            className="btn"
            target="_blank"
            href={ URL_LINKEDIN }
            rel="noreferrer"
          >
            Vamos conversar
          </a>
        </div>
      </div>
    </section>
  );
}
