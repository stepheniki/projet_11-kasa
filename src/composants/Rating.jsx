// import modules
import '../styles/Rating.css'

// import images
import redStar from '../assets/redstar.png'
import greyStar from '../assets/greystar.png'

// Component
function Rating({ stars }) {
  const range = [1, 2, 3, 4, 5]

  return (
    <div className="bloc_stars">
      {range.map((rangeStar) =>
        stars >= rangeStar ? (
          <span key={rangeStar.toString()}>
            <img
              className="red_star"
              src={redStar}
              alt="étoile-pleine"
              key={rangeStar.toString()}
            ></img>
          </span>
        ) : (
          <img
            className="grey_star"
            src={greyStar}
            alt="étoile-vide"
            key={rangeStar.toString()}
          ></img>
        ),
      )}
    </div>
  )
}

export default Rating
