import React from 'react';
import './Reservation.css'

const Reservation = ({ details, deleteRes }) => {
  return (
    <article className='res-card'>
      <h1>{details.name}</h1>
      <p>{details.date}</p>
      <p>{details.time} pm</p>
      <p>Number of Guests: {details.number}</p>
      <button onClick={() => {deleteRes(details.id)}} className='cancel-btn'>Cancel</button>
    </article>
  )
}

export default Reservation;