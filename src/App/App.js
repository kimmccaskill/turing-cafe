import React, { Component } from 'react';
import './App.css';
import { getRes, postRes } from '../apiCalls/apiCalls.js'
import Form from '../Form/Form.js';
import ResContainer from '../ResContainer/ResContainer.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
    }
  }

  addReservation = (reservation) => {
    postRes(reservation)
  }

  componentDidMount() {
    getRes()
      .then(data => this.setState({reservations: data}))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <Form addRes={this.addReservation} />
        <ResContainer 
          reservations={this.state.reservations} 
        />
      </div>
    )
  }
}

export default App;
