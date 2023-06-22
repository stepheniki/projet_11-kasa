import React, { useState } from 'react'
import ArrowRight from '../assets/ArrowRight.png'
import ArrowLeft from '../assets/ArrowLeft.png'


// DIAPORAMA DE CHAQUE LOGEMENT

export default function Gallery({ slides }) {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <section className="slider">
      {length > 1 && ( // Les flèches disparaissent quand une seule image disponible
        <>
          <img
            src={ArrowLeft}
            alt="slideshow"
            className="left-arrow"
            onClick={prevSlide}
          />
          <img
            src={ArrowRight}
            alt="slideshow"
            className="right-arrow"
            onClick={nextSlide}
          />
        </>
      )}

      <div className="image-counter">
        {current + 1}/
        {
          length // Compteur d'images
        }
      </div>

      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide} alt="slideshow" className="slideshow-image" />
            )}
          </div>
        )
      })}
    </section>
  )
}
