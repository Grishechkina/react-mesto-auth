import React from 'react';
import logo from '../images/mesto-logo.svg'
import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react';

function Header({ email, toggleIsLoggedIn }) {
  const location = useLocation()
  const [linkBtn, setLinkBtn] = useState({ path: '', btnName: '' });

  useEffect(() => {
    // возможно сравнивать по хэшу будем из за гита
    if (location.pathname === '/sign-in') {
      setLinkBtn({ path: '/sign-up', btnName: 'Регистрация' })
    } else if (location.pathname === '/sign-up') {
      setLinkBtn({ path: '/sign-in', btnName: 'Войти' })
    } else {
      setLinkBtn({
        path: '/sign-in', btnName: 'Выйти', onClick: () => {
          localStorage.removeItem('token')
          toggleIsLoggedIn(false)
        }
      })
    }
  }, [location])

  return (
    <header className="header page__header">
      <Link to="/" className="header__logo">
        <img src={logo} alt="Mesto лого" />
      </Link>
      <div className="header__user-info">
        {email && <span className="header__user-login">{email}</span>}
        <Link
          to={linkBtn.path}
          className="header__link"
          onClick={linkBtn.onClick}
        >
          {linkBtn.btnName}
        </Link>
      </div>
    </header>
  )
}

export default Header;