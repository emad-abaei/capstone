// React
import { useState } from "react";
// Components
import Button from "./Button";
// Utils
import { fetchAPI, getToday, submitAPI } from "../utils/helper";

function BookingForm({ state, dispatch }) {
  const [availableTimes, setAvailableTimes] = useState([]);

  function handleDate(e) {
    const date = e.target.value;

    dispatch({ type: "change_date", payload: date });

    initializeTimes(date);
  }

  function handleTime(e) {
    dispatch({ type: "change_time", payload: e.target.value });
  }

  function handleGuests(e) {
    dispatch({ type: "change_guests", payload: e.target.value });
  }

  function handleOccasion(e) {
    dispatch({ type: "change_occasion", payload: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newBooking = {
      id: Date.now().toString(),
      date: state.date,
      time: state.time,
      numberOfGuests: state.guests,
      occasion: state.occasion
    };

    console.log(newBooking);

    // API
    const submitRes = submitAPI(newBooking);
    console.log(submitRes);

    setAvailableTimes([]);

    dispatch({ type: "reset" });
  }

  const today = getToday();

  function initializeTimes(date) {
    // API
    const fetchAvailableTimes = fetchAPI(new Date(date));
    setAvailableTimes(fetchAvailableTimes);
  }

  return (
    <div className='booking'>
      <form className='booking__form' onSubmit={handleSubmit}>
        <label htmlFor='res-date'>Choose date</label>
        <input
          type='date'
          id='res-date'
          data-testid='res-date'
          min={today}
          value={state?.date}
          onChange={handleDate}
          required
        />
        <label htmlFor='res-time'>Choose time</label>
        <select
          id='res-time'
          data-testid='res-time'
          value={state?.time}
          onChange={handleTime}
          disabled={!state?.date}
          required>
          <option value=''>
            {availableTimes.length ? "Choose a time" : "Select a date first"}{" "}
          </option>
          {availableTimes.map((time) => (
            <option value={time} key={time}>
              {time}
            </option>
          ))}
        </select>
        <label htmlFor='guests'>Number of guests</label>
        <input
          type='number'
          placeholder='1'
          min='1'
          max='10'
          id='guests'
          value={state?.guests}
          onChange={handleGuests}
        />
        <label htmlFor='occasion'>Occasion</label>
        <select id='occasion' value={state?.occasion} onChange={handleOccasion}>
          <option value='birthday'>Birthday</option>
          <option value='anniversary'>Anniversary</option>
        </select>
        <Button type='lg'>Make Your reservation</Button>
      </form>
    </div>
  );
}

export default BookingForm;
