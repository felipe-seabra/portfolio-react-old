import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    const linkedin = "https://www.linkedin.com/in/felipe-seabra";

    return (
      <nav className="navbar navbar-expand-md container-fluid">
        <h2 className="logo navbar-brand">
          Portfó<span>lio</span>
        </h2>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-felipe" aria-controls="nav-felipe" aria-expanded="false" aria-label="Alterna navegação">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="nav-felipe">
          <ul className="cabeçalho-link navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home<span className="sr-only"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                Sobre
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link">
                Projetos
              </Link>
            </li>
            {/* <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contato
                </a>
              </li> */}
          </ul>
        </div>
        <a target="_blank" className="btn d-none d-lg-block" href={linkedin} rel="noreferrer">
          Linkedin
        </a>
      </nav>
    );
  }
}

export default Header;
