import paysage from '../assets/paysage.png'

function Banner() {
  return (
    <div className="paysage">
      <img alt="banner" src={paysage} className="paysage" />
      <div className="banner-text">
        <h1 className="non-responsive">Chez vous, partout et ailleurs</h1>
        <h1 className="responsive">
          Chez vous,
          <br /> partout et ailleurs
        </h1>
      </div>
    </div>
  )
}

export default Banner
