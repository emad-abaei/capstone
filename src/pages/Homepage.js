// Components
import About from "../components/About";
import Container from "../components/Container";
import Hero from "../components/Hero";
import Specials from "../components/Specials";
import Testimonials from "../components/Testimonials";

function Homepage() {
  return (
    <>
      <Hero />
      <Container>
        <Specials />
        <Testimonials />
        <About />
      </Container>
    </>
  );
}

export default Homepage;
