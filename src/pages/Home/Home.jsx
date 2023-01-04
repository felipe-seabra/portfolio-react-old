import React, { useEffect } from 'react';
import './style/Home.scss';

export default function Main() {
  useEffect(() => {
    document.title = 'Felipe Seabra - Desenvolvedor Web';
  }, []);

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
        <h3>
          Desenvolvedor Front-End.
        </h3>
      </div>
    </div>
  );
}
