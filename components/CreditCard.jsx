import React from "react";
import { useState, useRef } from "react";
import bookingStyles from "../src/style/booking.module.css";

export default function CreditCard(props) {
  console.log(props.reservationID);
  const creditCardForm = useRef(null);
  const [paymentCompleted, setPaymentCompleted] = useState(false);

  async function submit(e) {
    e.preventDefault();
    setPaymentCompleted(true);
    FinalSpotBooking(); // calling function to put POST request
  }

  async function FinalSpotBooking() {
    const finalOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: props.reservationID }),
    };

    fetch("http://localhost:8080/fullfill-reservation", finalOptions)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  }

  return (
    <div className={bookingStyles.creditSection}>
      <section className={bookingStyles.creditFormFields}>
        {paymentCompleted ? (
          <section>
            <h3>Reservation ID: {props.reservationID}</h3>
            <p>Thank you for your purchase!We look forward to seeing you at FooFest!</p>
          </section>
        ) : (
          <form onSubmit={submit} ref={creditCardForm}>
            <fieldset className={bookingStyles.creditFormStyling}>
              <legend>
                <h3 className={bookingStyles.h3_text}>Credit card information</h3>
              </legend>

              <label className={bookingStyles.label_text} htmlFor="creditCardNumber">
                Insert your credit card number:
              </label>
              <input className={bookingStyles.input_text} type="text" name="cardNumber" inputMode="numeric" placeholder="Credit Card Number" maxLength="16" pattern="[0-9]{16}" required></input>

              <label className={bookingStyles.label_text} htmlFor="creditCardMonth">
                Credit card month:
              </label>
              <input className={bookingStyles.input_text} type="text" name="cardMonth" inputMode="numeric" placeholder="Month" maxLength="2" pattern="[0-1][0-9]" required></input>

              <label className={bookingStyles.label_text} htmlFor="creditCardYear">
                Credit card year:
              </label>
              <input className={bookingStyles.input_text} type="text" name="cardYear" inputMode="numeric" placeholder="Year" maxLength="2" pattern="2[2-9]" required></input>

              <label className={bookingStyles.label_text} htmlFor="creditCardCvc">
                CVC number:
              </label>
              <input className={bookingStyles.input_text} type="text" name="cardSecurity" inputMode="numeric" placeholder="CVC" maxLength="3" pattern="[0-9]{3}" required></input>
            </fieldset>
            <button className={bookingStyles.booking_ticket_button}>Complete your purchase</button>
          </form>
        )}
      </section>
    </div>
  );
}
