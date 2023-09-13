import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Simple React App </h1>
        </header>
        <p className="App-intro">
          My name is T. Putra Agastiya, nice to see you!!
        </p>
      </div>
    );
  }
}

export default App;
