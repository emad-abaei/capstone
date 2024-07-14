// Components
import Chicago from "../components/Chicago";
import Container from "../components/Container";
import Hero from "../components/Hero";
import Specials from "../components/Specials";
import CustomersSay from "../components/CustomersSay";

function Homepage() {
  return (
    <>
      <Hero />
      <Container>
        <Specials />
        <CustomersSay />
        <Chicago />
      </Container>
    </>
  );
}

export default Homepage;
