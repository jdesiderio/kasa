function Rating(props) {
  const { rating } = props

  // Fonction pour créer les étoiles en fonction de la note
  const createStars = () => {
    const stars = []
    const maxStars = 5

    for (let i = 1; i <= maxStars; i++) {
      // Détermine la classe de l'étoile en fonction de la note
      const starClass = i <= rating ? 'full-star' : 'empty-star'

      // Ajoute chaque étoile au tableau
      stars.push(
        <i key={i} className={`fa-solid ${starClass} fa-star fa-2xl`}></i>
      )
    }
    return stars // Renvoie le tableau d'étoiles
  }

  // Affiche les étoiles
  return <div className="info__section-right--rating">{createStars()}</div>
}

export default Rating
