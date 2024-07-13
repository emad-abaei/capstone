// Components
import Rating from "./Rating";

function TestimonialItem({ item }) {
  return (
    <div className='testimonials__item'>
      <h3 className='testimonials__name'>{item.name}</h3>
      <div className='testimonials__content'>
        <img src={item.image} alt='user' />
        <p>{item.description}</p>
      </div>
      <Rating />
    </div>
  );
}

export default TestimonialItem;
