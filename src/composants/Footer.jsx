import logoblanc from '../assets/logoblanc.png'

function Footer() {
  return (
    <div className="footer">
      <div className="logo-center">
        <img src={logoblanc} alt="Logo-Kasa-blanc" className="footer-logo" />
      </div>
      <div className="footer-typo">© 2020 Kasa. All rights reserved</div>
    </div>
  )
}

export default Footer
