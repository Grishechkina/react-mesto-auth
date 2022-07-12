import React from 'react';
import logo from '../images/mesto-logo.svg'

function Header() {
  return (
    <header className="header page__header">
      <a href="#">
        <img src={logo} alt="Mesto лого" className="header__logo" />
      </a>
    </header>
  )
}

export default Header;