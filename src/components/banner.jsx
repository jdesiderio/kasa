import React from 'react'
import { useLocation } from 'react-router-dom'
import banner from '../assets/img/banniere.jpeg'
import banner2 from '../assets/img/banniere2.jpeg'

function Banner() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const isAboutPage = location.pathname === '/about'

  return (
    <div className="banner">
      {isHomePage && (
        <div>
          <img src={banner} alt="falaises" />
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
      )}
      {isAboutPage && (
        <div>
          <img src={banner2} alt="montagnes" />
        </div>
      )}
    </div>
  )
}

export default Banner
