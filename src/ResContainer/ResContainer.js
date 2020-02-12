import React from 'react';
import Reservation from '../Reservation/Reservation.js'
import './ResContainer.css';

const ResContainer = ({ reservations }) => {
  const appendedReservations = reservations.map(reservation => {
    return <Reservation details={reservation} />
  });
  return (
    <section>
      {appendedReservations}
    </section>
  )
}

export default ResContainer;