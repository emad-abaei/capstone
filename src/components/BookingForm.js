// React
import { useState } from "react";
// Components
import Button from "./Button";
// Utils
import { getToday } from "../utils/helper";

function BookingForm({ state, dispatch, stateTimes, dispatchTimes }) {
  const times = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const [availableTimes, setAvailableTimes] = useState(times);

  // function handleDate(e) {
  //   const date = e.target.value;
  //   availableFinder(date);
  //   dispatch({ type: "change_date", payload: date });
  // }

  function handleDate(e) {
    const date = e.target.value;
    console.log("Date selected:", date);
    availableFinder(date);
    dispatch({ type: "change_date", payload: date });
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

    dispatchTimes({
      type: "update_times",
      payload: { date: state.date, time: state.time }
    });

    dispatch({ type: "reset" });
  }

  function availableFinder(newTime) {
    if (stateTimes) {
      const tergetdDate = stateTimes.filter((time) => time.date === newTime);
      const targetTimes = tergetdDate.map((item) => item.time);

      const finalTimes = times.filter((time) => !targetTimes.includes(time));
      // console.log(finalTimes);

      setAvailableTimes(finalTimes);
    }
  }

  const today = getToday();

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
          // value={state?.date ? state.date : ""}
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
            {availableTimes.length
              ? "Please choose a time"
              : "No available time fot this day"}{" "}
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
