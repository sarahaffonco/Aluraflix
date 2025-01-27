// --- Pacotes ---
import React from 'react';
import { Link } from 'react-router-dom';

// --- Componentes ---
import Button from "../Button/Button";

// --- Imagens ---
import Logo from "../assets/logoalura.png";

// --- CSS ---
import "./Menu.css";

/*
  Button as="a" é o componente Button se comportando como tag a
para usar o css
*/
function Menu(){
  return (
    <nav className="Menu">
      <Link to="/">
        <img
          className="Logo"
          src={Logo}
          alt="AluraFlix"
        />
      </Link>
      <Button
        as={Link}
        className="ButtonLink"
        to="/cadastro/video"
      >
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;