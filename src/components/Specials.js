import React from "react";
import Button from "./Button";
import { MdDeliveryDining } from "react-icons/md";

function Specials() {
  return (
    <section className='specials'>
      <div className='specials__header'>
        <h1>This weeks specials!</h1>
        <div>
          <Button>Online Menu</Button>
        </div>
      </div>
      <div className='specials__content'>
        <div className='specials__item'>
          <img src='/assets/images/greek salad.jpg' alt='' />
          <div className='specials__item__content'>
            <div>
              <h3 className='specials__item__name'>greek salad</h3>
              <span className='specials__item__price'>$12.00</span>
            </div>
            <p className='specials__item__description'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum minus
              deleniti? Nostrum consequatur quae dicta quo neque illo
              consectetur nam necessitatibus deserunt!
            </p>
            <Button type='delivery'>
              <span>Order a delivery </span>
              <MdDeliveryDining size={25} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Specials;
