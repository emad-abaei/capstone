// Components
import Button from "./Button";

function BookingForm({ state, dispatch }) {
  function handleDate(e) {
    dispatch({ type: "change_date", payload: e.target.value });
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

  // function handleSubmit(e) {
  //   e.preventDefault();

  //   const newBooking = { date, time, guests, occasion };
  //   setBook(newBooking);
  //   console.log(newBooking);
  // }

  return (
    <div className='booking'>
      <form className='booking__form' onSubmit={() => console.log("submit")}>
        <label htmlFor='res-date'>Choose date</label>
        <input
          type='date'
          id='res-date'
          value={state.date ? state.date : ""}
          onChange={handleDate}
        />
        <label htmlFor='res-time'>Choose time</label>
        <select id='res-time' value={state.time} onChange={handleTime}>
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
          value={state.guests}
          onChange={handleGuests}
        />
        <label htmlFor='occasion'>Occasion</label>
        <select id='occasion' value={state.occasion} onChange={handleOccasion}>
          <option value='birthday'>Birthday</option>
          <option value='anniversary'>Anniversary</option>
        </select>
        <Button type='lg'>Make Your reservation</Button>
      </form>
    </div>
  );
}

export default BookingForm;
