// React
import { useState, useEffect } from "react";
// React router
import { useLocation } from "react-router-dom";
// Components
import Navbar from "./Navbar";
import NavIcon from "./NavIcon";

function NavMenu() {
  const [showNavbar, setShowNavbar] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setShowNavbar(false);
  }, [pathname]);

  return (
    <div className='navMenu'>
      <NavIcon showNavbar={showNavbar} setShowNavbar={setShowNavbar} />
      <Navbar showNavbar={showNavbar} />
    </div>
  );
}

export default NavMenu;
