// React router
import { Link, useNavigate } from "react-router-dom";
// Components
import Button from "./Button";

function Hero() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/booking");
  }

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
          <Link to='/booking'>
            <Button onClick={handleClick}>Reserve a Table</Button>
          </Link>
        </div>
        <div className='hero__image' />
      </div>
    </section>
  );
}

export default Hero;
