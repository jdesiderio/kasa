import React, { useState } from 'react'
import arrowLeft from '../assets/img/arrow-left.svg'
import arrowRight from '../assets/img/arrow-right.svg'

function Carousel(props) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % props.data.length)
  }

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + props.data.length) % props.data.length)
  }

  return (
    <div className="info__carousel">
      {props.data.map((picture, index) => (
        <div
          key={index}
          style={{ display: index === currentIndex ? 'block' : 'none' }}
          className="carousel--img"
        >
          <img alt="images du logement" src={picture} />
          <h3>
            {index + 1}/{props.data.length}
          </h3>
        </div>
      ))}
      <button onClick={handlePrev} className="carousel--button">
        <img src={arrowLeft} alt="changer" />
      </button>
      <button onClick={handleNext} className="carousel--button">
        <img src={arrowRight} alt="changer" />
      </button>
    </div>
  )
}

export default Carousel
