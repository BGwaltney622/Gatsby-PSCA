import React from "react"
import PropTypes from "prop-types"
import "./component-style/header.css"

const Header = ({ siteTitle }) => (
  <div className="container">
    <header>
      <a href="#"><img className="site-logo" src="/PSCA_ColorLogo_BBG.jpg" alt="PSCA Logo"/></a>
      <nav>
        <a href="#" className="hide-desktop">
          <img src='/Hamburger Button.png' alt="menu button" className="menu-btn" id="menu" />
        </a>
        <ul className="show-desktop hide-mobile">
          <li id='exit' className="exit-btn hide-desktop"><img src="/close-button.png" alt="exit button"></img></li>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>Courses</a></li>
          <li><a href='#'>Services</a></li>
          <li><a href='#'>Contact</a></li>
        </ul> 
      </nav>
    </header>
  </div>

  
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
