import React, { Component } from 'react';
import OpenPost from './OpenPost';
import '../style/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Reddit Top on React JS</h1>
        </header>
        <OpenPost />
      </div>
    );
  }
}

export default App;
