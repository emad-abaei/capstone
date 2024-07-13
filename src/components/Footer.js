// Components
import Nav from "./Nav";
// Icons
import {
  FaFacebook,
  FaInstagram,
  FaTelegramPlane,
  FaTwitter
} from "react-icons/fa";

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__image' />
        <div className='footer__nav'>
          <h3>Little Lemon</h3>
          <Nav />
        </div>
        <div className='footer__contact'>
          <h3>Contact</h3>
          <ul>
            <li>
              <a href='#'>
                1387 Stroman Islands, Lake Ruthanneburgh, AZ 46166-3554
              </a>
            </li>
            <li>
              <a href='#'>little.lemon@gmail.com</a>
            </li>
            <li>
              <a href='#'>(000) 111-222333</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Social Media</h3>
          <div className='footer__social-media'>
            <ul>
              <li>
                <a href='#'>
                  <FaFacebook size={30} />
                </a>
              </li>
              <li>
                <a href='#'>
                  <FaInstagram size={30} />
                </a>
              </li>
              <li>
                <a href='#'>
                  <FaTelegramPlane size={30} />
                </a>
              </li>
              <li>
                <a href='#'>
                  <FaTwitter size={30} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
