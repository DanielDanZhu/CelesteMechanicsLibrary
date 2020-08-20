import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../assets/celestestrawberry.png'

function Footer  () {
  return (
    <div className="footer">
      <div className="inner_footer">
        <Link to="/" style={{textDecoration: 'none'}}>

          <div className="footer_logo_container">
            <img src={icon} id="footer_img" alt="strawberry"/>
            <h1>Celeste <span>Mechanics</span></h1>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Footer;
