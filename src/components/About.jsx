import React from "react";
// import image from "./images/image.jpg";
class About extends React.Component {
  render() {
    const linkedin = "https://www.linkedin.com/in/felipe-seabra";

    return (
      <main id="about">
        <section className="background-color-Sobre">
          <div className="container">
            <div className="main-sobre row">
              {/* <img className="picture img-fluid" src={image} alt="Foto Felipe Seabra" /> */}
              <div className="Text-sobre mt-3">
                <h2>Sobre Mim</h2>

                <p>Natural de Presidente Prudente (SP), tenho aproximadamente 10 anos de experiência atuando em diversas áreas de tecnologia em educação.</p>
                <p>
                  <br />
                  <br />
                  Apesar de hoje me identificar mais com o <strong>Front-end</strong>, vejo que não há nada que eu não consiga <em>fazer/aprender</em>.
                </p>
                <a target="_blank" href={linkedin} rel="noreferrer">
                  Vamos conversar
                </a>
              </div>
            </div>
          </div>
        </section>

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

        <div className="me-contate container-fluid text-center" id="contact">
          <p>Contate para saber mais</p>
          <a target="_blank" href={linkedin} rel="noreferrer">
            Enviar mensagem
          </a>
        </div>
      </main>
    );
  }
}

export default About;
