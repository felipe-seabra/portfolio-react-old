import React, { useEffect } from 'react';
import './style/Home.scss';

export default function Main() {
  function setPageTitle() {
    const title = 'Felipe Seabra - Desenvolvedor Web';
    document.title = title;
  }

  useEffect(setPageTitle, []);

  return (
    <div className="home">
      <div className="home__title">
        <h4>Olá, meu nome é</h4>
        <h1>
          Felipe
          {' '}
          <span>Seabra</span>
          <span id="animate-flicker">|</span>
        </h1>
        <h3>Desenvolvedor Full-Stack.</h3>
      </div>
    </div>
  );
}
