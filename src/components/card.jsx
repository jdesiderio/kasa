import React from 'react'
import accommodations from '../logements.json'

function Card() {
  return (
    <>
      {accommodations.map((accommodation) => (
        <div className="card" key={accommodation.id}>
          <img src={accommodation.cover} alt={accommodation.title} />
          <p>{accommodation.title}</p>
        </div>
      ))}
    </>
  )
}

export default Card
