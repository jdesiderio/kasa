import accommodations from '../logements.json'
import Tag from '../components/tag'
import Collapsible from '../components/collapsible'
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
      <section className="info__txt">
        <div className="info__section-left">
          <h2>{selectedId.title}</h2>
          <p>{selectedId.location}</p>
          <Tag data={selectedId.tags} />
        </div>
        <div className="info__section-right">
          <div className="info__section-right--host">
            <p>{selectedId.host.name}</p>
            <img src={selectedId.host.picture} alt={selectedId.host.name} />
          </div>
          <div className="info__section-right--rating"></div>
        </div>
      </section>
      <div className="info__collapses">
        <Collapsible label="Description">
          <p>{selectedId.description}</p>
        </Collapsible>
        <Collapsible label="Équipements">
          <ul>
            {selectedId.equipments.map((equipments, index) => (
              <li key={index}>{equipments}</li>
            ))}
          </ul>
        </Collapsible>
      </div>
    </div>
  )
}

export default CardInfo
