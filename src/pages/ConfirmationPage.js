// Components
import Container from "../components/Container";
import ConfirmedBooking from "../components/ConfirmedBooking";

function ConfirmationPage({ confirmedBooking }) {
  return (
    <Container>
      <ConfirmedBooking confirmedBooking={confirmedBooking} />
    </Container>
  );
}

export default ConfirmationPage;
