import React, { useState } from 'react'
import { ReactComponent as Arrow } from '../assets/arrow.svg'


// COMPOSANT COLLAPSE - Prend en entrée deux propriétés : "title" et "content"
// Réutilisable: ces proporiétés permettent de passer des données au composant pour personnaliser son affichage
// Réutilisable : les classes CSS permettent de contrôler l’apparence du composant en fonction de son état.

const Collapse = ({ title, content }) => {
  // Définition de l'état "isOpen" pour contrôler si le contenu est affiché ou non
  // Usestate permet à React de mettre à jour le DOM lorsque l’état change, sans avoir à re-rendre l’ensemble du composant.
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
      <button // création du bouton de l'accordéon
        type="button"
        className={className.button}
        onClick={() => {
          // fonction pour mettre à jour l’état isOpen et afficher ou masquer le contenu en conséquence.
          clickCollaps()
        }}
      >
        {title}{' ' // espace entre le titre et l'icone
        } 
        <div className={`${isOpen ? 'icon-rotate' // pivoter l’icône de 180 degrés afin d’indiquer que le contenu est ouvert
         : ''}`}>
          <Arrow // icône en forme de flèche
          />
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
