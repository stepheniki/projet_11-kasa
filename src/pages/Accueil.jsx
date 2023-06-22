import Header from '../composants/Header'
import Banner from '../composants/Banner'
import HomeGrid from '../composants/HomeGrid'
import logo from '../assets/logo.png'
import Footer from '../composants/Footer'

import '../styles/Header.css'
import '../styles/Banner.css'
import '../styles/HomeGrid.css'
import '../styles/Footer.css'

// PAGE D'ACCUEIL

function App() {
  return (
    <>
      <div className="body-app">
        <div className="layout">
          <div className="App-header">
            <img src={logo} alt="Logo-Kasa" className="kasa-logo" // LOGO
            />
            <Header // MENU
            /> 
          </div>
          <Banner // BANNIERE
          />
          <HomeGrid // GRILLE DES LOCATIONS
          />
        </div>
        <Footer // FOOTER
        />
      </div>
    </>
  )
}

export default App
