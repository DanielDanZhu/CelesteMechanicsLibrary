import React from 'react'

import img from '../assets/bear.jpg'
import Footer from "./Footer.js";

function About() {
  return (
    <div className="screen">
      <div className="page">
        <div className="page_header">
          About
        </div>
        <hr />
        <div className="page_body">
          <img className="bear" src={img} alt="bear"/>
          <div className="about_body">
            Created by Daniel Zhu aka IAmABarOfSoap <br />
            Source code can be found <a style={{textDecoration: 'none'}} href="https://github.com/DanielDanZhu/CelesteMechanicsLibrary">here</a><br/>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About;
