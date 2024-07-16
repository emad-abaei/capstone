// Components
import Container from "../components/Container";
import BookingForm from "../components/BookingForm";

function BookingPage({ state, dispatch, stateTimes, dispatchTimes }) {
  return (
    <Container>
      <h2>
        Booking a Table at <span className='littleLemon'>Little Lemon</span>
      </h2>
      <BookingForm
        state={state}
        dispatch={dispatch}
        stateTimes={stateTimes}
        dispatchTimes={dispatchTimes}
      />
    </Container>
  );
}

export default BookingPage;
