import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="background">
          <nav className="navbar navbar-expand-md container-fluid">
            <h2 className="logo navbar-brand">
              Portfó<span>lio</span>
            </h2>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-felipe" aria-controls="nav-felipe" aria-expanded="false" aria-label="Alterna navegação">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="nav-felipe">
              <ul className="cabeçalho-link navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="./">
                    Home<span className="sr-only"></span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    Sobre
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#projects">
                    Projetos
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
            <a target="_blank" className="btn d-none d-lg-block link-linkedin" href="#about">
              Linkedin
            </a>
          </nav>
          <div className="Main">
            <h4>Olá, meu nome é</h4>
            <h1>
              Felipe <span>Seabra</span>
              <span id="animate-flicker">|</span>
            </h1>
            <h3>
              Sou estudante de desenvolvimento web na
              <strong>
                <a className="trybe" href="https://www.betrybe.com/" target="_blank" rel="noreferrer">
                  Trybe
                </a>
              </strong>
              .
            </h3>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
