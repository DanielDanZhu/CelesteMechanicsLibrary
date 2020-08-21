import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../assets/celestestrawberry.png';
import { keywords } from './keywords.js';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="inner_header">
          <Link to="/">
            <img src={icon} className="header_img" alt="strawberry"/>
            <div className="logo_container">
              <h1>Celeste <span>Mechanics</span></h1>
            </div>
          </Link>
            <ul className="navigation">
              <a><li><Link to="/contact" style={{textDecoration: 'none'}}>Contact</Link></li></a>
              <a><li><Link to="/about" style={{textDecoration: 'none'}}>About</Link></li></a>
            </ul>
        </div>
      </div>
    )
  }
}

export default Header;
