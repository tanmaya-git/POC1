import React, { Component, img } from 'react';
import Navigation from './Components/Navigation';
import './App.css';
import List from './List';
import Gallery from './Components/Gallery';
import {Image} from 'react-bootstrap';
import Iframe from 'react-iframe';
import './zep.png'

class App extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <Gallery/>
         <List/>
      </div>
    );
  }
}

export default App;
