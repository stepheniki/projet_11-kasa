import { NavLink } from 'react-router-dom'

function Header() {
  return (
    // Ajout classe active => élément de menu surligné
    <nav className="right-menu">
      <NavLink className="menu typo" to="/" activeclassname="active">
        Accueil
      </NavLink>

      <NavLink className="menu typo" to="/APropos" activeclassname="active">
        A propos
      </NavLink>
    </nav>
  )
}

export default Header
