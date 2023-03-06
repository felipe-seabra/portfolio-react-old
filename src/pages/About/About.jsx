/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { profileImg } from '../../images';
import setPageTitle from '../../utils/setPageTitle';
import './style/About.scss';

const TEXTS = [
  `Tenho mais de 10 anos de experiência na área de tecnologia educacional. 
Estou me especializando em Desenvolvimento Web Full-Stack na Trybe, com grande interesse em Front-End. 
Sempre atualizado com as últimas tendências, adoro colaborar e aprender com os outros.`,

  `Se você tiver interesse em tecnologia ou projetos desafiadores, 
por favor, entre em contato. Será um prazer conversar com você.`,
];

const URL_LINKEDIN = 'https://www.linkedin.com/in/felipe-seabra';

export default function About() {
  useEffect(() => {
    setPageTitle('Sobre - Felipe Seabra');
  }, []);

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
            {TEXTS[0]}
          </p>
          <p>
            {TEXTS[1]}
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
