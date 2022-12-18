import React from 'react'
import GuestInfo from './GuestInfo';
import CreditCard from './CreditCard';

export default function Step2InForm(props) {

    // set amount of tickets in basket:
    const howManyTickets = props.totalTickets;

    // decide what to show in form - GuestInfo or CreditCard:
    if(howManyTickets >= 2) {
        return <GuestInfo totalTickets={props.totalTickets} reservationID={props.reservationID} />
    } else {
        return <CreditCard reservationID={props.reservationID}/>
    }

  return (
   <></>
  )
}
