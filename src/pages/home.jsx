import Card from '../components/card'
import accommodations from '../logements.json'

function Home() {
  return (
    <div className="main-container">
      {accommodations.map((accommodation) => (
        <Card key={accommodation.id} data={accommodation} />
      ))}
    </div>
  )
}

export default Home
