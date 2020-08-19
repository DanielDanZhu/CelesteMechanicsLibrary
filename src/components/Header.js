import React from 'react';
import {
  Switch,
  Route,
  Link
} from 'react-router-dom';
import icon from '../assets/celestestrawberry.png'

import Home from './Home.js'
import Page from './Page.js'
import About from './About.js'

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="inner_header">
          <img src={icon} alt="strawberry"/>
          <div className="logo_container">
            <h1>Celeste <span>Mechanics</span></h1>
          </div>
            <ul className="navigation">
              <a><li><Link to="/" style={{textDecoration: 'none'}}>Home</Link></li></a>
              <a><li><Link to="/about" style={{textDecoration: 'none'}}>About</Link></li></a>
            </ul>
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/walk">
                <Page name={"walk"}/>
              </Route>
              <Route path="/jump">
                <Page name={"jump"}/>
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
