import React, { useEffect } from 'react';
import './style/Home.css';

export default function Main() {
  useEffect(() => {
    document.title = 'Felipe Seabra - Desenvolvedor Web';
  });
  return (
    <div className="background-home container-fluid">
      <div className="title-home">
        <h4>Olá, meu nome é</h4>
        <h1>
          Felipe
          {' '}
          <span>Seabra</span>
          <span id="animate-flicker">|</span>
        </h1>
        <h3>
          Desenvolvedor Front-End
          {/* <strong>
            <a className="trybe" href="https://www.betrybe.com/" target="_blank" rel="noreferrer" style={ { textDecoration: 'none' } }>
              Trybe
            </a>
          </strong> */}
          .
        </h3>
      </div>
    </div>
  );
}
