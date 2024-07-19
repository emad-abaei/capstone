// Icons
import { FaRegCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { formatDate } from "../utils/helper";

function ConfirmedBooking({ confirmedBooking }) {
  const { date, time, numberOfGuests, occasion } = confirmedBooking;

  if (!confirmedBooking)
    return (
      <h2>
        Book a table in{" "}
        <Link to='/booking' className='booking__Link'>
          Reservation
        </Link>{" "}
        page.
      </h2>
    );

  return (
    <>
      <h2>Booking has been confirmed</h2>
      <div className='booking__confirmation'>
        <p>
          <span>Date:</span> <span>{formatDate(date)}</span>
        </p>
        <p>
          <span>Time:</span> <span>{time}</span>
        </p>
        <p>
          <span>Number of guests:</span> <span>{numberOfGuests}</span>
        </p>
        <p>
          <span>Occasion:</span> <span>{occasion}</span>
        </p>
        <p>
          <FaRegCheckCircle size={40} />
        </p>
      </div>
    </>
  );
}

export default ConfirmedBooking;
