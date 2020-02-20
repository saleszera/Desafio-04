import React from 'react';

function Header() {
  return (
    <header className="app-tile">
      <nav>
        <img src="https://i.imgur.com/KDIDiSE.png" alt="facebookLogo" />
        <div>
          <span>Meu perfil</span>
          <i className="material-icons">account_circle</i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
