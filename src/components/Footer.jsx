import React from 'react';

class Footer extends React.Component {
  render() {
    const instagram = 'https://www.instagram.com/felipeseabra_';
    const linkedin = 'https://www.linkedin.com/in/felipe-seabra';
    const github = 'https://github.com/felipe-seabra';

    return (
      <footer>
        {/* <h6>Felipe Seabra</h6> */}
        {/* <p>Para mais informações - clique nos links abaixo</p> */}
        <div className="Redes-sociais">
          <a
            target="_blank"
            href={ github }
            rel="noreferrer"
            style={ { textDecoration: 'none' } }
          >
            <i className="fab fa-github" />
          </a>
          <a
            target="_blank"
            href={ linkedin }
            rel="noreferrer"
            style={ { textDecoration: 'none' } }
          >
            <i className="fab fa-linkedin" />
          </a>
          <a
            target="_blank"
            href={ instagram }
            rel="noreferrer"
            style={ { textDecoration: 'none' } }
          >
            <i className="fab fa-instagram" />
          </a>
        </div>
        <p className="end">Felipe S. - &copy; 2022</p>
      </footer>
    );
  }
}

export default Footer;
