import React from 'react';
import './style/Footer.scss';

const SOCIAL_NETWORKS = [
  { url: 'https://github.com/felipe-seabra', iconClass: 'fab fa-github' },
  { url: 'https://www.linkedin.com/in/felipe-seabra', iconClass: 'fab fa-linkedin' },
  { url: 'https://www.instagram.com/felipeseabra_', iconClass: 'fab fa-instagram' },
];

function Footer() {
  return (
    <footer>
      <div className="social-networks">
        {SOCIAL_NETWORKS.map((network, index) => (
          <a
            key={ index }
            target="_blank"
            href={ network.url }
            rel="noreferrer"
            style={ { textDecoration: 'none' } }
          >
            <i className={ network.iconClass } />
          </a>
        ))}
      </div>
      <p className="end">Felipe S. - &copy; 2022</p>
    </footer>
  );
}

export default Footer;
