import React from 'react'
import Logements from '../datas/logements.json'
import Slideshow from '../composants/Gallery'
import Accordeon from '../composants/Collapse'
import { useParams } from 'react-router-dom'
import Rating from './Rating'
import Error404 from '../pages/Error404'


// FICHE POUR CHAQUE LOGEMENT - DETAILS

function Details({ selectedId }) {
  const { id } = useParams()
  const value = Logements.find((logement) => logement.id === id)

  // SI le logement est trouvé, retourner les élements de la page et ses composants
  if (typeof value !== 'undefined') {
    return (
      <>
        <Slideshow slides={value.pictures // DIAPORAMA DE LA LOCATION
        }  /> 
        <div className="flex-title-name">
          <div className="details-title">{value.title // TITRE DE LA LOCATION
          }</div>
          <div className="flex-picture-name-desktop">
            <div className="details-name">{value.host.name // IDENTITE DU LOUEUR - DESKTOP
            }</div>
            <img
              className="details-picture" 
              alt="profil"
              src={value.host.picture // PHOTO DE PROFIL DU LOUEUR - DESKTOP
              }
            />
          </div>
        </div>

        <div className="details-location">{value.location // LIEU DE LA LOCATION
        }</div> 
        <div className="flex-rating">
          <div>
            {value.tags.map((tag) => (
              <span className="details-tags" key={tag // TAGS 
              }>
                {tag}
              </span>
            ))}
          </div>
          <div className="rating-desktop">
            <Rating stars={value.rating // NOMBRE D'ETOILES - DESKTOP
            } />
          </div>
        </div>

        <div className="flex-picture-name-mobile">
          <div className="rating-mobile">
            <Rating stars={value.rating // NOMBRE D'ETOILES - MOBILE
            } />
          </div>

          <div className="flex-mobile">
            <div className="details-name">{value.host.name // IDENTITE DU LOUEUR - MOBILE
            }</div>
            <img
              className="details-picture"
              alt="profil"
              src={value.host.picture} // PHOTO DE PROFIL DU LOUEUR - MOBILE
            />
          </div>
        </div>

        <div className="double-accordeon">
          <div className=" collapse--housePage ">
            <Accordeon
              selectedId={id}
              title="Description" 
              content={value.description // ACCORDEON DESCRIPTION DU LOGEMENT
              }
            />
          </div>
          <div className=" collapse--housePage">
            <Accordeon
              selectedId={id}
              title="Equipements" 
              content={value.equipments // ACCORDEON EQUIPEMENTS DU LOGEMENT
            }
            />
          </div>
        </div>
      </>
    )

    // Si id n'existe pas => Error404
    // si l’utilisateur essaie d’accéder à une page de détails pour un logement qui n’existe pas
  } else {
    return <Error404 />
  }
}

export default Details
