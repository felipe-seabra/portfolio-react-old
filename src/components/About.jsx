import React from "react";
import image from "../images/image.jpg";
class About extends React.Component {
  render() {
    const linkedin = "https://www.linkedin.com/in/felipe-seabra";

    return (
      <section className="background-color-grey">
        <div className="container">
          <div className="main-sobre row">
            <img className="picture img-fluid" src={image} alt="Foto Felipe Seabra" />
            <div className="Text-sobre mt-3">
              <h2>Sobre Mim</h2>

              <p>
                Natural de Presidente Prudente (SP), tenho aproximadamente 10 anos de
                experiência atuando em diversas áreas de tecnologia em educação.
              </p>
              <p>
                Apesar de hoje me identificar mais com o <strong>Front-end</strong>, vejo
                que não há nada que eu não consiga <em>fazer/aprender</em>.
              </p>
              <a className="btn" target="_blank" href={linkedin} rel="noreferrer">
                Vamos conversar
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
