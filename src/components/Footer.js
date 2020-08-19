import React from 'react';
import {
  Link
} from 'react-router-dom';

function Footer  () {
  return (
    <div className="footer">
      <div className="inner_footer">
          <ul className="navigation">
            <a><li><Link to="/" style={{textDecoration: 'none'}}>Home</Link></li></a>
            <a><li><Link to="/about" style={{textDecoration: 'none'}}>About</Link></li></a>
          </ul>
      </div>
    </div>
  )
}

export default Footer;
