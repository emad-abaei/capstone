import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to='/'>
      <img src='assets/images/logo.svg' alt='logo'></img>
    </Link>
  );
}

export default Logo;
