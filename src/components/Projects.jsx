import React from "react";

export default class Projects extends React.Component {
  render() {
    return (
      <div className="services-container container-fluid" id="projects">
        <div className="title">
          <h2>Meus Projetos</h2>
        </div>

        <div className="card-box">
          <div className="card">
            <div className="card-bg">
              <img className="card-img-top" src="projects/pixels-art/images/background-pixels-art.png" alt="Imagem de Pixels Art" />
              <div className="card-body">
                <h5 className="card-title">Projeto Pixels Art</h5>
                <p className="card-text">Projeto desenvolvido após as aulas de JavaScript, onde aprendemos a trabalhar com elementos, eventos e web storage.</p>
                <a href="projects/pixels-art/index.html" className="btn" target="_blank">
                  Visitar
                </a>
              </div>
            </div>
          </div>
          <div className="Card">
            <div className="card">
              <img className="card-img-top" src="projects/criarte-profissionalizante/images/background-criarte-profissionalizante.png" alt="Imagem de Pixels Art" />
              <div className="card-body">
                <h5 className="card-title">Página Colégio Criarte</h5>
                <p className="card-text">Projeto desenvolvido para descrição dos cursos profissionalizantes do Colégio Criarte. HTML, CSS e JavaScript.</p>
                <a href="projects/criarte-profissionalizante/index.html" className="btn" target="_blank">
                  Visitar
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <div>
              <i className="fas fa-bell"></i>
              <h5>Em Construção</h5>
            </div>
          </div>
        </div>
        <div className="container text-center mt-5">
          <a href="/projects.html" className="btn">
            Todos os Projetos
          </a>
        </div>
      </div>
    );
  }
}
