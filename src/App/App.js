import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form.js';
import ResContainer from '../ResContainer/ResContainer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <Form />
        <ResContainer />
      </div>
    )
  }
}

export default App;
