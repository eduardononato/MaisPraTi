import React from 'react';

const Header = ({ onNavigate }) => {
  return (
    <header className="app-header">
      <nav className="main-nav">
        <button className="nav-button" onClick={() => onNavigate('search')}>Busca de Filmes</button>
        <button className="nav-button" onClick={() => onNavigate('favorites')}>Meus Favoritos</button>
      </nav>
    </header>
  );
};

export default Header;