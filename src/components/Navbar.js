import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/booking'>Reservation</NavLink>
        </li>
        <li>
          <NavLink to='/menu'>Order Online</NavLink>
        </li>
        <li>
          <NavLink to='/login'>Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;