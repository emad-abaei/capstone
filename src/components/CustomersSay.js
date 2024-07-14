// Components
import TestimonialItem from "./TestimonialItem";
// Dummy data
import { TESTIMONILS_DATA } from "../data/dummyData";

function CustomersSay() {
  const testimonials = TESTIMONILS_DATA;

  return (
    <section className='testimonials'>
      <h1>Testimonials</h1>
      <div className='testimonials__items'>
        {testimonials.map((item) => (
          <TestimonialItem item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}

export default CustomersSay;
