import Container from "./Container";
import Hero from "./Hero";
import Specials from "./Specials";

function Main() {
  return (
    <main className='main'>
      <Hero />
      <Container>
        <Specials />
      </Container>
    </main>
  );
}

export default Main;
