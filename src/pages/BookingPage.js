// Components
import Container from "../components/Container";
import BookingForm from "../components/BookingForm";

function BookingPage() {
  return (
    <Container>
      <h2>
        Booking a Table at <span className='littleLemon'>Little Lemon</span>
      </h2>
      <BookingForm />
    </Container>
  );
}

export default BookingPage;
