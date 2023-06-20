import Header from '../composants/Header'
import Banner from '../composants/Banner'
import HomeGrid from '../composants/HomeGrid'
import logo from '../assets/logo.png'
import Footer from '../composants/Footer'

import '../styles/Header.css'
import '../styles/Banner.css'
import '../styles/HomeGrid.css'
import '../styles/Footer.css'

function App() {
  return (
    <>
      <div className="body-app">
        <div className="layout">
          <div className="App-header">
            <img src={logo} alt="Logo-Kasa" className="kasa-logo" />
            <Header />
          </div>
          <Banner />
          <HomeGrid />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
