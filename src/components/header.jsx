import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/img/LOGO.svg'
import banner from '../assets/img/banniere.jpeg'

function Header() {
  return (
    <div className="header">
      <div className="navbar">
        <img src={logo} alt="logo Kasa" />
        <nav className="navbar__links">
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/about">A propos</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="banner">
        <img src={banner} alt="falaises" />
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
    </div>
  )
}

export default Header
