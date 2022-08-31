import React from "react";

export default class Main extends React.Component {
  render() {
    return (
      <div className="background">
        <div className="Main">
          <h4>Olá, meu nome é</h4>
          <h1>
            Felipe <span>Seabra</span>
            <span id="animate-flicker">|</span>
          </h1>
          <h3>
            Sou estudante de desenvolvimento web na
            <strong>
              <a className="trybe" href="https://www.betrybe.com/" target="_blank" rel="noreferrer" style={{textDecoration: 'none'}}>
                Trybe
              </a>
            </strong>
            .
          </h3>
        </div>
      </div>
    );
  }
}
