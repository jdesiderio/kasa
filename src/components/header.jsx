import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <img src="" alt="" />
      <nav>
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
  )
}

export default Header
