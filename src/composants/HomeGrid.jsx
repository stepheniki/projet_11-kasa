import { Link } from 'react-router-dom'
import Logements from '../datas/logements.json'

// ACCUEIL - GRILLE DES LOCATIONS

function HomeGrid() {
  return (
    <div className="grid">
      {Logements.map((value) => {
        return (
          <div key={value.id}>
            <Link to={`/Location/${value.id}` // LIEN VERS FICHE LOGEMENT
          }>
              <img
                className="card-image degrade"
                src={value.cover // IMAGE DU LOGEMENT
                }
                alt="location"
              />
            </Link>
            <div className="title-text">
              <div className="title">{value.title // TITRE DU LOGEMENT
              }</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default HomeGrid
