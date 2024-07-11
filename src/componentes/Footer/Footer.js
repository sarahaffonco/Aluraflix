// --- Pacotes ---
import React from 'react';
import logoalura from'../img/logoalura.png';

// --- CSS ---
import { FooterBase} from './Footer-css.js';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src={logoalura}
         alt="Logo Alura"
         style={{ width: '168.45px', height: '40px' }}/>
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;