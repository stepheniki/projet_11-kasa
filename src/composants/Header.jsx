import { NavLink } from 'react-router-dom'

// MENU

function Header() {
  return (
    // Ajout classe active => élément de menu surligné
    <nav className="right-menu">
      <NavLink className="menu typo" to="/" activeclassname="active" // LIEN VERS ACCUEIL
      >
        Accueil
      </NavLink>

      <NavLink className="menu typo" to="/APropos" activeclassname="active" // LIEN VERS PAGE A PROPOS
      >
        A propos
      </NavLink>
    </nav>
  )
}

export default Header
