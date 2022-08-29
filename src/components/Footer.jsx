import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <h6>Felipe Seabra</h6>
        <p>Para mais informações - clique nos links abaixo</p>
        <div className="Redes-sociais">
          <a className="link-github" target="_blank" href="./">
            <i className="fab fa-github"></i>
          </a>
          <a className="link-linkedin" target="_blank" href="./">
            <i className="fab fa-linkedin"></i>
          </a>
          <a className="link-instagram" target="_blank" href="./">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
        <p class="end">Felipe S. - &copy; 2022</p>
      </footer>
    );
  }
}

export default Footer;
