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
           changed with git push origin feature1: Hi brtanch1!!!
          </p>
          
        </header>
      </div>
    );
  }
}

export default App;
