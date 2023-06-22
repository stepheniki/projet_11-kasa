import React, { useState } from 'react'
import { ReactComponent as Arrow } from '../assets/arrow.svg'


// COMPOSANT COLLAPSE - Prend en entrée deux propriétés : "title" et "content"

const Collapse = ({ title, content }) => {
  // Définition de l'état "isOpen" pour contrôler si le contenu est affiché ou non
  const [isOpen, setIsOpen] = useState(false)

  // Fonction pour gérer le clic sur le bouton pour ouvrir/fermer le contenu
  const clickCollaps = () => {
    setIsOpen((isOpen) => !isOpen)
  }

  // Définition des classes CSS en fonction de l'état "isOpen"
  const className = {
    button: `collapsible`,
    myicon: `<FontAwesomeIcon icon="fa-solid fa-chevron-up" style={{color: "#ffffff",}} />${
      isOpen ? ' ' : ' icon-rotate'
    }`,
    content: `content${isOpen ? ' ' : ' not-display'}`,
    text: 'description-text',
  }

  return (
    <div className="Collaps">
      <button
        type="button"
        className={className.button}
        onClick={() => {
          clickCollaps()
        }}
      >
        {title}{' '}
        <div className={`${isOpen ? 'icon-rotate' : ''}`}>
          <Arrow />
        </div>
      </button>

{/* Affichage du contenu en fonction de son type: tableau(<ul><li>) ou non(<p>) */}
      {Array.isArray(content) ? (
        <ul className={className.content}>
          {content.map((item, i) => (
            <li key={`${i}`}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className={className.content}>{content}</p>
      )}
    </div>
  )
}
export default Collapse
