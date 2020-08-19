import React from 'react'

import img from '../assets/bear.jpg'

function About() {
  return (
    <div className="page">
      <div className="page_header">
        About
      </div>
      <hr />
      <div className="page_body">
        <div className="about_body">
          Created by Daniel Zhu aka IAmABarOfSoap <br />
          Source code can be found <a style={{textDecoration: 'none'}} href="https://github.com/DanielDanZhu/CelesteMechanicsLibrary">here</a><br/>
        </div>

        <img className="bear" src={img} alt="bear"/>
      </div>
    </div>
  )
}

export default About;
