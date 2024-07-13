// Components
import Button from "./Button";

function Hero() {
  return (
    <section className='hero'>
      <div className='hero__container'>
        <div className='hero__content'>
          <h1>little lemon</h1>
          <h2>chicago</h2>
          <p>
            We are a fimily owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Button>Reserve a Table</Button>
        </div>
        <div className='hero__image' />
      </div>
    </section>
  );
}

export default Hero;
