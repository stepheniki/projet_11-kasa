import Header from '../composants/Header'
import logo from '../assets/logo.png'
import Footer from '../composants/Footer'
import BannerApropos from '../composants/BannerApropos'
import Accordeon from '../composants/Collapse'
import { AccordeonContenu } from '../datas/Accordeon'

import '../styles/Header.css'
import '../styles/Footer.css'
import '../styles/Accordeon.css'

// PAGE A PROPOS

function APropos() {
  return (
    <>
      {' '}
      <div className="body-app">
        <div className="layout">
          <div className="App-header">
            <img src={logo} alt="Logo-Kasa" className="kasa-logo" // LOGO
            />
            <Header // MENU
            />
          </div>
          <BannerApropos // BANNIERE
          />

          <div className="AboutCollaps" // ACCORDEON A PROPOS
          >
            {AccordeonContenu.map(({ title, content }, index) => (
              <Accordeon key={`${index}`} title={title} content={content} />
            ))}
          </div>
        </div>
        <div className="emptyspace"></div>
        <Footer // FOOTER
        />
      </div>
    </>
  )
}

export default APropos
