import React from 'react'
import logoBlanc from '../assets/img/LOGO-blanc.svg'

function Footer() {
  return (
    <div className="footer">
      <img src={logoBlanc} alt="Logo Kasa" />
      <p className="footer__txt">© 2020 Kasa. All rights reserved</p>
    </div>
  )
}

export default Footer
