import React, { Component } from 'react';
import Iframe from 'react-iframe';
import './App.css';
import List from './List';
import zep from './zep.png'

class App extends Component {
  render() {
    return (
      <div className="container">
      <div>
        <img src={zep}
        style={{width:"1200px" ,height:"298px", paddingLeft:"40px"}}/>
        </div>
      <div>
        <List />
        </div>
      </div>
    );
  }
}

export default App;
