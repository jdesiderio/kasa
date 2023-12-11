import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/img/LOGO.svg'
import Banner from './banner'

function Header() {
  // Utilisation de useLocation pour obtenir l'emplacement actuel
  const location = useLocation()

  // État pour suivre le lien actif
  const [activeLink, setActiveLink] = useState('/')

  // Utilisation de useEffect pour mettre à jour le lien actif lorsque l'emplacement change
  useEffect(() => {
    setActiveLink(location.pathname)
  }, [location])

  return (
    <div className="header">
      <div className="navbar">
        <img src={logo} alt="logo Kasa" />
        <nav className="navbar__links">
          <ul>
            <li>
              <Link to="./" className={activeLink === '/' ? 'current' : ''}>
                Accueil
              </Link>
            </li>
            <li>
              <Link
                to="./about"
                className={activeLink === '/about' ? 'current' : ''}
              >
                À propos
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <Banner />
    </div>
  )
}

export default Header
