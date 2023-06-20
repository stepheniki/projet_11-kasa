import { useParams } from 'react-router-dom'
import Header from '../composants/Header'
import Footer from '../composants/Footer'
import logo from '../assets/logo.png'
import Details from '../composants/Details'
import Logements from '../datas/logements.json'

import '../styles/Slideshow.css'
import '../styles/Header.css'
import '../styles/Details.css'

function Location() {
  const { id } = useParams()
  const value = Logements.find((logement) => logement.id === id)

  return (
    <>
      {' '}
      <div className="body-app">
        <div className="layout">
          {value && (
            <div className="App-header">
              <img src={logo} alt="Logo-Kasa" className="kasa-logo" />
              <Header />
            </div>
          )}
          <Details selectedId={id} />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Location
