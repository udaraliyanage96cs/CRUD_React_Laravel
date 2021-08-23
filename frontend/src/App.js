import React, { Component } from 'react';
import "./App.css";
import Navbar from './Components/Navbar';
import Demo from './Components/Tableview';
import Adddata from './Components/Adddata';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <div className="container">
          <Adddata></Adddata>
          <Demo></Demo>
        </div>
      </div>
    );
  }
}

export default App;
