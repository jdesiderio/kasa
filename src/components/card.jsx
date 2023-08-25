import { useNavigate } from 'react-router-dom'

function Card(props) {
  const data = props.data
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/card/${data.id}`)
  }

  return (
    <div className="card" onClick={handleClick}>
      <img src={data.cover} alt={data.title} />
      <h2 className="card__title">{data.title}</h2>
    </div>
  )
}

export default Card
