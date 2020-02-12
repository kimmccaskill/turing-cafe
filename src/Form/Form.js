import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: Date.now(),
      name: '',
      date: '',
      time: '',
      number: '',
    }
  }

  updateChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitReservation = (e) => {
    e.preventDefault()
    this.props.addRes(this.state)
    this.setState({
      id: Date.now(),
      name: '',
      date: '',
      time: '',
      number: '',
    })
  }

  render() {
    return (
      <form
        className="reservation-form"
        onSubmit={this.submitReservation}
      >
        <input
          name='name'
          placeholder="Name"
          type="text"
          value={this.state.name}
          onChange={this.updateChange}
        />
        <input
          name='date'
          placeholder="Date (mm/dd)"
          type="text"
          value={this.state.date}
          onChange={this.updateChange}
        />
        <input
          name='time'
          placeholder="Time"
          type="text"
          value={this.state.time}
          onChange={this.updateChange}
        />
        <input
          name='number'
          placeholder="Number of guests"
          type="text"
          value={this.state.number}
          onChange={this.updateChange}
          maxlength='2'
          min='1'
          max='25'
        />
        <button 
          onClick={this.submitReservation}
          >Make a Reservation
        </button>
      </form>
    )
  }
}

export default Form;