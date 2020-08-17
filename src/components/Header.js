import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import {
  Dropdown,
} from 'react-bootstrap';
import icon from './celestestrawberry.png'

import Home from './Home.js'
import Page from './Page.js'
import About from './About.js'

class Header extends React.Component {
  render() {
    return (
      <div class="header">
        <div class="inner_header">
          <img src={icon} alt="strawberry"/>
          <div class="logo_container">
            <h1>Celeste <span>Mechanics</span></h1>
          </div>
            <ul class="navigation">
              <a><li><Link to="/home" style={{textDecoration: 'none'}}>Home</Link></li></a>
              <a><li><Link to="/about" style={{textDecoration: 'none'}}>About</Link></li></a>
            </ul>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/super">
              <Page name={"super"}/>
            </Route>
            <Route path="/hyper">
              <Page name={"hyper"}/>
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    )
  }
}

export default Header;
