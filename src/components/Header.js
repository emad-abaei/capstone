import Logo from "./Logo";
import Nav from "./Nav";

function Header({ children }) {
  return (
    <header>
      <Logo />
      <Nav />
    </header>
  );
}

export default Header;
