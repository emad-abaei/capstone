// Components
import Button from "./Button";
// Icons
import { MdDeliveryDining } from "react-icons/md";

function SpeciatlItem({ item }) {
  return (
    <article className='specials__item'>
      <img src={item.image} alt='' />
      <div className='specials__item__content'>
        <div>
          <h3 className='specials__item__name'>{item.name}</h3>
          <span className='specials__item__price'>${item.price}</span>
        </div>
        <p className='specials__item__description'>{item.description}</p>
        <Button type='delivery'>
          <span>Order a delivery </span>
          <MdDeliveryDining size={25} />
        </Button>
      </div>
    </article>
  );
}

export default SpeciatlItem;
