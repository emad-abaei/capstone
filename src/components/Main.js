import About from "./About";
import Container from "./Container";
import Hero from "./Hero";
import Specials from "./Specials";
import Testimonials from "./Testimonials";

function Main() {
  return (
    <main className='main'>
      <Hero />
      <Container>
        <Specials />
        <Testimonials />
        <About />
      </Container>
    </main>
  );
}

export default Main;
