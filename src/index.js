import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './index.css';

import Header from './components/Header.js'
import Page from './components/Page.js'
import Home from './components/Home.js'
import Contact from './components/Contact.js'
import About from './components/About.js'
import Footer from './components/Footer.js'

class App extends React.Component {
  componentDidMount(){
    document.title = "Celeste Mechanics"
  }

  render() {
    return (
      <div class="app">
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/contact">
            <Contact />
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
          <Route path="/dash">
            <Page name={"dash"}/>
          </Route>
          <Route path="/super">
            <Page name={"super"}/>
          </Route>
          <Route path="/hyper">
            <Page name={"hyper"}/>
          </Route>
          <Route path="/extend">
            <Page name={"extension"}/>
          </Route>
          <Route path="/reverse">
            <Page name={"reversal"}/>
          </Route>
          <Route path="/wavedash">
            <Page name={"wavedash"}/>
          </Route>
          <Route path="/coyote">
            <Page name={"coyote"}/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
