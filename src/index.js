import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import './index.css';

import Header from './components/Header.js'
import Footer from './components/Footer.js'

class App extends React.Component {
  render() {
    return (
      <div class="app">
        <Header />
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
