import React from 'react'
import Logements from '../datas/logements.json'
import Slideshow from '../composants/Gallery'
import Accordeon from '../composants/Collapse'
import { useParams } from 'react-router-dom'
import Rating from './Rating'
import Error404 from '../pages/Error404'

function Details({ selectedId }) {
  const { id } = useParams()
  const value = Logements.find((logement) => logement.id === id)

  // SI le logement est trouvé, retourner les élements de la page et ses composants
  if (typeof value !== 'undefined') {
    return (
      <>
        <Slideshow slides={value.pictures} />
        <div className="flex-title-name">
          <div className="details-title">{value.title}</div>
          <div className="flex-picture-name-desktop">
            <div className="details-name">{value.host.name}</div>
            <img
              className="details-picture"
              alt="profil"
              src={value.host.picture}
            />
          </div>
        </div>

        <div className="details-location">{value.location}</div>
        <div className="flex-rating">
          <div>
            {value.tags.map((tag) => (
              <span className="details-tags" key={tag}>
                {tag}
              </span>
            ))}
          </div>
          <div className="rating-desktop">
            <Rating stars={value.rating} />
          </div>
        </div>

        <div className="flex-picture-name-mobile">
          <div className="rating-mobile">
            <Rating stars={value.rating} />
          </div>

          <div className="flex-mobile">
            <div className="details-name">{value.host.name}</div>
            <img
              className="details-picture"
              alt="profil"
              src={value.host.picture}
            />
          </div>
        </div>

        <div className="double-accordeon">
          <div className=" collapse--housePage ">
            <Accordeon
              selectedId={id}
              title="Description"
              content={value.description}
            />
          </div>
          <div className=" collapse--housePage">
            <Accordeon
              selectedId={id}
              title="Equipements"
              content={value.equipments}
            />
          </div>
        </div>
      </>
    )

    // Si id n'existe pas => Error404
  } else {
    return <Error404 />
  }
}

export default Details
