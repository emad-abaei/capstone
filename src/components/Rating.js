// Icons
import { GoStarFill } from "react-icons/go";

function Rating() {
  const stars = [...Array(5)];

  return (
    <div className='rate'>
      {stars.map((_, ix) => (
        <GoStarFill color='#f4ce14' key={ix} />
      ))}
    </div>
  );
}

export default Rating;
