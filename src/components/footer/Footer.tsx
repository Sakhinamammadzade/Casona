import './footer.scss';
import { AiOutlineBehance, AiOutlineDribbble, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import React from 'react';
import logo from '../../assets/images/WhiteLogo.svg';

function Footer() {
  return (
    <footer>
      <div className="footer-container container">
        <div className="footer-content">
          <div className="footer-element">
            <div className="footer-logo">
              <img src={logo} alt="footer-logo" />
            </div>
          </div>
          <div className="footer-element footer-navbar">
            <ul>
              <Link to={'/shop'}>
                <li>Shipping</li>
              </Link>
              <Link to={'/about'}>
                <li>Returns</li>
              </Link>
              <Link to={'/about'}>
                <li>FAQ</li>
              </Link>
            </ul>
          </div>
          <div className="footer-element footer-icons">
            <div className="icons-element">
              <Link to={'/'}>
                <AiOutlineTwitter />
              </Link>
            </div>
            <div className="icons-element">
              <Link to={'/'}>
                <AiOutlineDribbble />
              </Link>
            </div>
            <div className="icons-element" id="behance">
              <Link to={'/'}>
                <AiOutlineBehance />
              </Link>
            </div>
            <div className="icons-element">
              <Link to={'/'}>
                <AiOutlineInstagram />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
