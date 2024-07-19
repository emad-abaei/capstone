// React
import { useState } from "react";
// React router
import { useNavigate } from "react-router-dom";
// Components
import Button from "./Button";
// Utils
import { getToday } from "../utils/helper";

export function BookingForm({
  state,
  dispatch,
  availableTimes,
  setAvailableTimes,
  initializeTimes,
  submitForm
}) {
  const navigate = useNavigate();
  const today = getToday();

  // State for validation errors
  const [errors, setErrors] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: ""
  });

  function validateDate(date) {
    if (!date) return "Date is required.";
    return "";
  }

  function validateTime(time) {
    if (!time) return "Time is required.";
    return "";
  }

  function validateGuests(guests) {
    if (!guests || guests < 1 || guests > 10)
      return "Number of guests must be between 1 and 10.";
    return "";
  }

  function validateOccasion(occasion) {
    if (!occasion) return "Occasion is required.";
    return "";
  }

  function handleDate(e) {
    const date = e.target.value;
    const error = validateDate(date);
    setErrors((prevErrors) => ({ ...prevErrors, date: error }));
    dispatch({ type: "change_date", payload: date });
    initializeTimes(date);
  }

  function handleTime(e) {
    const time = e.target.value;
    const error = validateTime(time);
    setErrors((prevErrors) => ({ ...prevErrors, time: error }));
    dispatch({ type: "change_time", payload: time });
  }

  function handleGuests(e) {
    const guests = e.target.value;
    const error = validateGuests(guests);
    setErrors((prevErrors) => ({ ...prevErrors, guests: error }));
    dispatch({ type: "change_guests", payload: guests });
  }

  function handleOccasion(e) {
    const occasion = e.target.value;
    const error = validateOccasion(occasion);
    setErrors((prevErrors) => ({ ...prevErrors, occasion: error }));
    dispatch({ type: "change_occasion", payload: occasion });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const dateError = validateDate(state.date);
    const timeError = validateTime(state.time);
    const guestsError = validateGuests(state.guests);
    const occasionError = validateOccasion(state.occasion);

    if (dateError || timeError || guestsError || occasionError) {
      setErrors({
        date: dateError,
        time: timeError,
        guests: guestsError,
        occasion: occasionError
      });
      return;
    }

    const newBooking = {
      id: Date.now().toString(),
      date: state.date,
      time: state.time,
      numberOfGuests: state.guests,
      occasion: state.occasion
    };

    const submitResponse = submitForm(newBooking);

    if (submitResponse) {
      navigate("/confirmation");
      setAvailableTimes([]);
      dispatch({ type: "reset" });
    }
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
        />
        {errors.date && <p className='error'>{errors.date}</p>}

        <label htmlFor='res-time'>Choose time</label>
        <select
          id='res-time'
          data-testid='res-time'
          value={state?.time}
          onChange={handleTime}
          disabled={!state?.date}>
          <option value=''>
            {availableTimes?.length ? "Choose a time" : "Select a date first"}{" "}
          </option>
          {availableTimes?.map((time) => (
            <option value={time} key={time}>
              {time}
            </option>
          ))}
        </select>
        {errors.time && <p className='error'>{errors.time}</p>}

        <label htmlFor='guests'>Number of guests</label>
        <input
          type='number'
          placeholder='Enter the number of guests'
          min='1'
          max='10'
          id='guests'
          value={state?.guests}
          onChange={handleGuests}
        />
        {errors.guests && <p className='error'>{errors.guests}</p>}

        <label htmlFor='occasion'>Occasion</label>
        <select id='occasion' value={state?.occasion} onChange={handleOccasion}>
          <option value=''>Select an occasion</option>
          <option value='birthday'>Birthday</option>
          <option value='anniversary'>Anniversary</option>
        </select>
        {errors.occasion && <p className='error'>{errors.occasion}</p>}

        <Button type='lg'>Make Your Reservation</Button>
      </form>
    </div>
  );
}

export default BookingForm;
