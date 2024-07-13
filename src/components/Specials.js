// Components
import Button from "./Button";
import SpecialItem from "./SpecialItem";
// Dummy data
import { SPECIALS_DATA } from "../data/dummyData";

function Specials() {
  const specialItems = SPECIALS_DATA;

  return (
    <section className='specials'>
      <div className='specials__header'>
        <h1>This weeks specials!</h1>
        <div>
          <Button>Online Menu</Button>
        </div>
      </div>
      <div className='specials__content'>
        {specialItems.map((item) => (
          <SpecialItem item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}

export default Specials;