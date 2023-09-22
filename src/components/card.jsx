import { useNavigate } from 'react-router-dom'

function Card(props) {
  const data = props.data // Récupération des données de la carte depuis les props
  const navigate = useNavigate() // Utilisation du hook de navigation pour rediriger vers une autre page

  const handleClick = () => {
    navigate(`/card/${data.id}`) // Au clic sur la carte, naviguer vers la page détaillée de la carte en utilisant l'ID de la carte
  }

  return (
    <div className="card" onClick={handleClick}>
      <img src={data.cover} alt={data.title} />
      <h2 className="card__title">{data.title}</h2>
    </div>
  )
}

export default Card
