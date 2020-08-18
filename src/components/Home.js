import React from 'react'
import {
  Link
} from 'react-router-dom';

import Page from './Page.js'
import About from './About.js'

function Home() {
  return (
    <div class="page">
      <div class="home_header">
        Contents
      </div>
      <hr />
      <div class="list_wrapper">
          <div class="contents_header">Basic Movement</div>
          <ul class="contents">
            <a><li><Link to="/walk" style={{textDecoration: 'none'}}>Walk</Link></li></a>
            <a><li><Link to="/jump" style={{textDecoration: 'none'}}>Jump</Link></li></a>
            <a><li><Link to="/dash" style={{textDecoration: 'none'}}>Dash</Link></li></a>
            <a><li><Link to="/crouch" style={{textDecoration: 'none'}}>Crouch</Link></li></a>
            <a><li><Link to="/grab" style={{textDecoration: 'none'}}>Grab</Link></li></a>
          </ul>
          <div class="contents_header">Advanced Movement</div>
          <ul class="contents">
            <a><li><Link to="/super" style={{textDecoration: 'none'}}>Superdash</Link></li></a>
            <a><li><Link to="/hyper" style={{textDecoration: 'none'}}>Hyperdash</Link></li></a>
              <a><li class="indent"><Link to="/wavedash" style={{textDecoration: 'none'}}>Wavedash</Link></li></a>
              <a><li class="indent"><Link to="/extend" style={{textDecoration: 'none'}}>Extension</Link></li></a>
              <a><li class="indent"><Link to="/reverse" style={{textDecoration: 'none'}}>Reversal</Link></li></a>
            <a><li><Link to="/bhop" style={{textDecoration: 'none'}}>Bunnyhop</Link></li></a>
            <a><li><Link to="/wallbounce" style={{textDecoration: 'none'}}>Wallbounce</Link></li></a>
            <a><li><Link to="/cornerkick" style={{textDecoration: 'none'}}>Cornerkick</Link></li></a>
            <a><li><Link to="/ultra" style={{textDecoration: 'none'}}>Ultra</Link></li></a>
              <a><li class="indent"><Link to="/reversehyperultra" style={{textDecoration: 'none'}}>Reverse Hyper Ultra</Link></li></a>
              <a><li class="indent"><Link to="/groundedultra" style={{textDecoration: 'none'}}>Grounded Ultra</Link></li></a>
              <a><li class="indent"><Link to="/delayedultra" style={{textDecoration: 'none'}}>Delayed Ultra</Link></li></a>
              <a><li class="indent"><Link to="/cutsceneultra" style={{textDecoration: 'none'}}>Cutscene Ultra</Link></li></a>
            <a><li><Link to="/demo" style={{textDecoration: 'none'}}>Demodash</Link></li></a>
            <a><li><Link to="/cornerboost" style={{textDecoration: 'none'}}>Cornerboost</Link></li></a>
            <a><li><Link to="/coyote" style={{textDecoration: 'none'}}>Coyote Frames</Link></li></a>
            <a><li><Link to="/spikejump" style={{textDecoration: 'none'}}>Spike jump</Link></li></a>
            <a><li><Link to="/neutral" style={{textDecoration: 'none'}}>Neutral Walljump</Link></li></a>
            <a><li><Link to="/buffer" style={{textDecoration: 'none'}}>Buffer System</Link></li></a>
            <a><li><Link to="/ceilingpop" style={{textDecoration: 'none'}}>Ceiling Pop</Link></li></a>
            <a><li><Link to="/transition" style={{textDecoration: 'none'}}>Screen Transitions</Link></li></a>
          </ul>
          <div class="contents_header">Interactables</div>
          <ul class="contents">
            <a><li><Link to="/berry" style={{textDecoration: 'none'}}>Red Strawberries</Link></li></a>
            <a><li><Link to="/movingblock" style={{textDecoration: 'none'}}>Moving Blocks</Link></li></a>
            <a><li><Link to="/breakableblock" style={{textDecoration: 'none'}}>Breakable Blocks</Link></li></a>
            <a><li><Link to="/activeateableblock" style={{textDecoration: 'none'}}>Activateable Blocks</Link></li></a>
            <a><li><Link to="/crumbleblock" style={{textDecoration: 'none'}}>Crumble Blocks</Link></li></a>
            <a><li><Link to="/dreamblock" style={{textDecoration: 'none'}}>Dream Blocks</Link></li></a>
            <a><li><Link to="/keys" style={{textDecoration: 'none'}}>Keys</Link></li></a>
            <a><li><Link to="/bubble" style={{textDecoration: 'none'}}>Bubbles</Link></li></a>
            <a><li><Link to="/wind" style={{textDecoration: 'none'}}>Wind</Link></li></a>
            <a><li><Link to="/theo" style={{textDecoration: 'none'}}>Crystal Theo</Link></li></a>
            <a><li><Link to="/seeker" style={{textDecoration: 'none'}}>Seekers</Link></li></a>
            <a><li><Link to="/feather" style={{textDecoration: 'none'}}>Feathers</Link></li></a>
            <a><li><Link to="/bumper" style={{textDecoration: 'none'}}>Bumpers</Link></li></a>
            <a><li><Link to="/water" style={{textDecoration: 'none'}}>Water</Link></li></a>
            <a><li><Link to="/dashrefill" style={{textDecoration: 'none'}}>Dash Refill</Link></li></a>
            <a><li><Link to="/cassette" style={{textDecoration: 'none'}}>Cassettes</Link></li></a>
            <a><li><Link to="/heart" style={{textDecoration: 'none'}}>Crystal Hearts</Link></li></a>
          </ul>
      </div>
    </div>
  )
}

export default Home;
