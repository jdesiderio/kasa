import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/img/LOGO.svg'
import Banner from './banner'

function Header() {
  const location = useLocation()
  const [activeLink, setActiveLink] = useState('/')

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
              <Link to="/" className={activeLink === '/' ? 'current' : ''}>
                Accueil
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={activeLink === '/about' ? 'current' : ''}
              >
                A propos
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
