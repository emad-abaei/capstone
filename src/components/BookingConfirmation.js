import Button from "./Button";

function BookingConfirmation({ bookItem }) {
  return (
    <div className='booking__confirmation'>
      <p>You are booking a table: </p>
      <p>Date: </p>
      <p>Time: </p>
      <p>: </p>
      <p>Date: </p>
      <Button>Cancel</Button>
      <Button>Confirm</Button>
    </div>
  );
}

export default BookingConfirmation;
