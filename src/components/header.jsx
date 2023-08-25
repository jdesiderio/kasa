import { Link } from 'react-router-dom'
import logo from '../assets/img/LOGO.svg'
import Banner from './banner'

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
      <Banner />
    </div>
  )
}

export default Header
