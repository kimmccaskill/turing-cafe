import React from 'react';
import Reservation from '../Reservation/Reservation.js'
import './ResContainer.css';

const ResContainer = ({ reservations, deleteReservation }) => {
  const appendedReservations = reservations.map(reservation => {
    return <Reservation deleteRes={deleteReservation} details={reservation} />
  });
  return (
    <section className='res-container'>
      {appendedReservations}
    </section>
  )
}

export default ResContainer;