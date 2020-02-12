import React from 'react';
import './Reservation.css'

const Reservation = ({ details }) => {
  return (
    <article className='res-card'>
      <h1>{details.name}</h1>
      <p>{details.date}</p>
      <p>{details.time} pm</p>
      <p>Number of Guests: {details.number}</p>
      <button className='cancel-btn'>Cancel</button>
    </article>
  )
}

export default Reservation;