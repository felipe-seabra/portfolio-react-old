<<<<<<< HEAD
import React from "react";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
=======
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarText } from "reactstrap";
>>>>>>> 53bbfa0cfc088202b822921c500af7563386cd54

const Header = (props) => {
  const linkedin = "https://www.linkedin.com/in/felipe-seabra";

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="container-fluid" expand="md">
        <NavbarBrand className="logo">
          Portfó<span>lio</span>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>
                <Link to="/" style={{textDecoration: 'none'}}>
                  Home<span className="sr-only"></span>
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/about" style={{textDecoration: 'none'}}>
                  Sobre
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/projects" style={{textDecoration: 'none'}}>
                  Projetos
                </Link>
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText><a target="_blank" className="btn d-none d-lg-block" href={linkedin} rel="noreferrer">
          Linkedin
        </a></NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
