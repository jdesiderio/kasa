function Rating(props) {
  const { rating } = props

  const createStars = () => {
    const stars = []
    const maxStars = 5

    for (let i = 1; i <= maxStars; i++) {
      const starClass = i <= rating ? 'full-star' : 'empty-star'
      stars.push(
        <i key={i} className={`fa-solid ${starClass} fa-star fa-2xl`}></i>
      )
    }
    return stars
  }

  return <div className="info__section-right--rating">{createStars()}</div>
}

export default Rating
