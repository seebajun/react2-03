import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import './BarraNav.css'


import { NavLink } from "react-router-dom";

const BarraNav = () => {
  const cssActive = ({ isActive }) => (isActive ? "activo" : "inactivo");

  return (
    <>
      <Navbar className="fontnav" bg="dark" data-bs-theme="dark">
        <Container>
          <Nav >
            <img src="/pokeball.svg" width={50}  alt="" />
            <NavLink  to="/" className={cssActive}>
              Home
            </NavLink>
            <NavLink to="/pokemons" className={cssActive}>
            Pokemons
            </NavLink>  
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default BarraNav;
