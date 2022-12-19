import React from "react";
import bookingStyles from "../src/style/booking.module.css";
import campingStyles from "../src/style/camping.module.css";

export default function BookingH2() {
  return (
    <div className={bookingStyles.bookingH2_div}>
      <h2 className={bookingStyles.bookingH2}>Ticket Booking</h2>
    </div>
  );
}
