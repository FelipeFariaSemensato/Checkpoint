import React from 'react';
import "./style.css"

const Header = () => {
  return (
    <div>
        <header className="panificadora-header">
        <h1 className="header-title">PANIFICADORA ROGER</h1>
        <h2 className="header-subtitle">Os melhores pães estão aqui</h2>
        <ul className="header-nav">
          <li>Contato</li>
          <li>Sobre</li>
          <li>Produtos</li>
          <li>Home</li>
        </ul>
        </header>
    </div>
  );
};

export default Header;
