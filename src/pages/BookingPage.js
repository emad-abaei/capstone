// Components
import Container from "../components/Container";
import BookingForm from "../components/BookingForm";

function BookingPage({
  state,
  dispatch,
  availableTimes,
  setAvailableTimes,
  initializeTimes,
  submitForm
}) {
  return (
    <Container>
      <h2>
        Booking a Table at <span className='littleLemon'>Little Lemon</span>
      </h2>
      <BookingForm
        state={state}
        dispatch={dispatch}
        availableTimes={availableTimes}
        setAvailableTimes={setAvailableTimes}
        initializeTimes={initializeTimes}
        submitForm={submitForm}
      />
    </Container>
  );
}

export default BookingPage;
