import React from 'react'

function Rating(props) {
  const { rating } = props

  const createStars = () => {
    const stars = []
    const maxStars = 5

    for (let i = 1; i <= maxStars; i++) {
      if (i <= rating) {
        stars.push(
          <span key={i} className="star full-star">
            <i className="fa-solid full-star fa-star fa-2xl"></i>
          </span>
        )
      } else {
        stars.push(
          <span key={i} className="star empty-star">
            <i className="fa-solid empty-star fa-star fa-2xl"></i>
          </span>
        )
      }
    }
    return stars
  }

  return <div className="info__section-right--rating">{createStars()}</div>
}

export default Rating
