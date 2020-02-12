import React, { Component } from 'react';
import './App.css';
import { getData } from '../apiCalls/apiCalls.js'
import Form from '../Form/Form.js';
import ResContainer from '../ResContainer/ResContainer.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
    }
  }
  componentDidMount() {
    getData()
      .then()
  }

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
