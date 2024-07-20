// React
import { useState, useEffect } from "react";
// Components
import Logo from "./Logo";
import Navbar from "./Navbar";
import NavMenu from "./NavMenu";

function Header() {
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      const scrollY = window.scrollY;
      scrollY > 150 ? setFixed(true) : setFixed(false);
    });
  }, []);

  return (
    <header className={`header ${fixed ? "fixed" : ""}`}>
      <div className='header__container'>
        <Logo />
        <Navbar />
        <NavMenu />
      </div>
    </header>
  );
}

export default Header;
