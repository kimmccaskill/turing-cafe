import React, { Component } from 'react';
import './App.css';
import { getRes, postRes, deleteRes } from '../apiCalls/apiCalls.js'
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

  deleteReservation = id => {
    const updatedReservations = this.state.reservations.filter(reservation => reservation.id !== id);
    this.setState({ reservations: updatedReservations });
    deleteRes(id)
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
          deleteReservation={this.deleteReservation}
        />
      </div>
    )
  }
}

export default App;
