import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './style/Header.scss';

const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'Sobre' },
  { path: '/projects', label: 'Projetos' },
  { path: '/contact', label: 'Contato' },
];

function Header() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('/');

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <header className="header fixed-top">
      <Navbar collapseOnSelect className="container" expand="md">
        <Navbar.Brand>
          <Link to="/" className="header__logo">
            Felipe
            <span> Seabra</span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse navbar id="responsive-navbar-nav">
          <Nav className="container me-auto header__links">
            {NAV_LINKS.map((link, index) => (
              <Nav.Link
                key={ index }
                as={ Link }
                to={ link.path }
                className="navlink"
                active={ activeLink === link.path }
              >
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
