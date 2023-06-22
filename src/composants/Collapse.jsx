import React, { useState } from 'react'
import { ReactComponent as Arrow } from '../assets/arrow.svg'


// COMPOSANT COLLAPSE

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false)
  const clickCollaps = () => {
    setIsOpen((isOpen) => !isOpen)
  }
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
