import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
           changed for feature1 branch: welcome brtanch1
          </p>
          
        </header>
      </div>
    );
  }
}

export default App;
