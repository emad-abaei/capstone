// Components
import Logo from "./Logo";
import Navbar from "./Navbar";
import NavMenu from "./NavMenu";

function Header() {
  return (
    <header className='header'>
      <Logo />
      <Navbar />
      <NavMenu />
    </header>
  );
}

export default Header;
