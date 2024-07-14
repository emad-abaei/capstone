// React router
import { Outlet } from "react-router-dom";

function Main() {
  return (
    <main className='main'>
      <Outlet />
    </main>
  );
}

export default Main;
