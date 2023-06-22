import { Link } from 'react-router-dom'
import '../styles/Error404.css'
import Header from '../composants/Header'
import logo from '../assets/logo.png'

// PAGE ERREUR 404

const Error404 = () => {
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
        </div>
      </div>
      <div className="Error404" // TEXTE D'ERREUR
      >
        <div className="text404">404</div>
        <p className="oups">Oups! La page que vous demandez n'existe pas.</p>
        <Link to={'/'} className="ErrortoHome" // LIEN VERS PAGE ACCUEIL
        >
          <p>Retourner sur la page d'accueil</p>
          <br />
          <br />
        </Link>
      </div>
    </>
  )
}

export default Error404
