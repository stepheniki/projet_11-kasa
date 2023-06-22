import logoblanc from '../assets/logoblanc.png'

// FOOTER

function Footer() {
  return (
    <div className="footer">
      <div className="logo-center">
        <img src={logoblanc} alt="Logo-Kasa-blanc" className="footer-logo" // LOGO
        />
      </div>
      <div className="footer-typo" // COPYRIGHT ET IDENTITE
      >© 2020 Kasa. All rights reserved</div>
    </div>
  )
}

export default Footer
