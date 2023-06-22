import paysage from '../assets/paysage.png'

// BANNIERE

function Banner() {
  return (
    <div className="paysage">
      <img alt="banner" src={paysage} className="paysage" // IMAGE DE LA BANNIERE
      />
      <div className="banner-text">
        <h1 className="non-responsive" // TEXTE DE LA BANNIERE - DESKTOP
        >Chez vous, partout et ailleurs</h1>
        <h1 className="responsive" // TEXTE DE LA BANNIERE - MOBILE
        >
          Chez vous,
          <br /> partout et ailleurs
        </h1>
      </div>
    </div>
  )
}

export default Banner
