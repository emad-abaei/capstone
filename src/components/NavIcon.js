// Icons
import { IoMenu, IoClose } from "react-icons/io5";

function NavIcon({ showNavbar, setShowNavbar }) {
  function clickHandler() {
    setShowNavbar((show) => !show);
  }

  return (
    <div className='navIcon' onClick={clickHandler}>
      {showNavbar ? <IoClose size={25} /> : <IoMenu size={30} />}
    </div>
  );
}

export default NavIcon;
