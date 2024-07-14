import { useState } from "react";

function BookingForm() {
  const [date, setDate] = useState(null);
  const [time, setTime] = useState("19:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("birthday");

  function handleDate(e) {
    setDate(e.target.value);
  }

  function handleTime(e) {
    setTime(e.target.value);
  }

  function handleGuests(e) {
    setGuests(e.target.value);
  }

  function handleOccasion(e) {
    setOccasion(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ date, time, guests, occasion });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='res-date'>Choose date</label>
      <input
        type='date'
        id='res-date'
        value={date ? date : ""}
        onChange={handleDate}
      />
      <label htmlFor='res-time'>Choose time</label>
      <select id='res-time' value={time} onChange={handleTime}>
        <option value='17:00'>17:00</option>
        <option value='18:00'>18:00</option>
        <option value='19:00'>19:00</option>
        <option value='20:00'>20:00</option>
        <option value='21:00'>21:00</option>
        <option value='22:00'>22:00</option>
      </select>
      <label htmlFor='guests'>Number of guests</label>
      <input
        type='number'
        placeholder='1'
        min='1'
        max='10'
        id='guests'
        value={guests}
        onChange={handleGuests}
      />
      <label htmlFor='occasion'>Occasion</label>
      <select id='occasion' value={occasion} onChange={handleOccasion}>
        <option value='birthday'>Birthday</option>
        <option value='anniversary'>Anniversary</option>
      </select>
      <input type='submit' value='Make Your reservation' />
    </form>
  );
}

export default BookingForm;
