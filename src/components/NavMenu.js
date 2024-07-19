import { useState } from "react";
import Navbar from "./Navbar";
import { IoMenu } from "react-icons/io5";

function NavMenu() {
  const [showNavbar, setShowNavbar] = useState(true);

  return (
    <div className='navMenu'>
      <div className='navMenu__icon'>
        <IoMenu size={30} />
      </div>
      <Navbar />
    </div>
  );
}

export default NavMenu;
