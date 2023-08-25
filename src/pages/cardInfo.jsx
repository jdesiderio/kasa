import accommodations from '../logements.json'
import Tag from '../components/tag'
import Collapse from '../components/collapse'
import { useParams, Navigate } from 'react-router-dom'

function CardInfo() {
  const { id } = useParams()
  const selectedId = accommodations.find(
    (accommodation) => accommodation.id === id
  )

  if (!selectedId) {
    return <Navigate to="/error" />
  }

  return (
    <div className="info-container">
      <div className="info__carrousel">
        <img src={selectedId.cover} alt={selectedId.title} />
      </div>
      <div className="info__section-left">
        <h2>{selectedId.title}</h2>
        <p>{selectedId.location}</p>
      </div>
      <Tag data={selectedId.tags} />
      <div className="info__section-right">
        <div className="info__section-right--host">
          <p>{selectedId.host.name}</p>
          <img src={selectedId.host.picture} alt={selectedId.host.name} />
        </div>
        <div className="info__section-right--rating"></div>
      </div>
      <div className="info__collapses"></div>
      <Collapse collapseTitle="Description" data={selectedId.description} />
      <Collapse collapseTitle="Équipements" data={selectedId.equipments} />
    </div>
  )
}

export default CardInfo
