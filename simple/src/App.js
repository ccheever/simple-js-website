import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Button } from 'react-bootstrap';

import NavExample from './NavExample';

class App extends Component {

  state = {
    count: 0,
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>The count is {this.state.count}</p>
        <Button onClick={() => {
          this.setState({ count: this.state.count + 1 });
        }}>Click Me</Button>
        <NavExample />
      </div>
    );
  }
}

export default App;
