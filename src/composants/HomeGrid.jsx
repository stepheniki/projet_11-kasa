import { Link } from 'react-router-dom'
import Logements from '../datas/logements.json'

function HomeGrid() {
  return (
    <div className="grid">
      {Logements.map((value) => {
        return (
          <div key={value.id}>
            <Link to={`/Location/${value.id}`}>
              <img
                className="card-image degrade"
                src={value.cover}
                alt="location"
              />
            </Link>
            <div className="title-text">
              <div className="title">{value.title}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default HomeGrid
