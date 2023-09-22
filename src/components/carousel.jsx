import { useState } from 'react'
import arrowLeft from '../assets/img/arrow-left.svg'
import arrowRight from '../assets/img/arrow-right.svg'

function Carousel(props) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === props.data.length ? 0 : prevIndex + 1
    )
  }
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? props.data.length - 1 : prevIndex - 1
    )
  }

  const displayControls = props.data.length > 1

  return (
    <div className="info__carousel">
      {props.data.map((picture, index) => (
        <div
          key={index}
          style={{ display: index === currentIndex ? 'block' : 'none' }}
          className="carousel--img"
        >
          <img alt="images du logement" src={picture} />
          {displayControls && (
            <div>
              <h3>
                {index + 1}/{props.data.length}
              </h3>
            </div>
          )}
        </div>
      ))}
      {displayControls && (
        <div>
          <button onClick={handlePrev} className="carousel--button">
            <img src={arrowLeft} alt="changer" />
          </button>
          <button onClick={handleNext} className="carousel--button">
            <img src={arrowRight} alt="changer" />
          </button>
        </div>
      )}
    </div>
  )
}

export default Carousel
