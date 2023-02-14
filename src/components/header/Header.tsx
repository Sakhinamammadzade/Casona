import './header.scss';
import { AiOutlineUser } from 'react-icons/ai';
import { CgSearch, CgShoppingCart } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { openCart, openHamburger, openSearch } from './headerAsideSlice';
import { useDispatch } from 'react-redux';
import CartAside from '../CartAside/CartAside';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import React, { useState } from 'react';
import SearchModal from '../SearchModal/SearchModal';
import hamburger from '../../assets/images/hamburgerMenu.svg';
import logo from '../../assets/images/WhiteLogo.svg';

function Header() {
  //color

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 96) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener('scroll', changeColor);

  //redux

  const dispatch = useDispatch();

  const openHamburgerAside = () => dispatch(openHamburger());
  const openSearchAside = () => dispatch(openSearch());
  const openCartAside = () => dispatch(openCart());

  //close clickoutside

  // const closeMenu = () => setIsDrawerOpen(false);

  //   useEffect(() => {
  //     document.body.addEventListener('click', closeMenu);

  //     return function cleanup() {
  //         window.removeEventListener('click', closeMenu );
  //     };
  // },[]);

  const linkClassName = color ? 'menu-item-href' : '';
  const linkIconClassName = color ? 'scroll-fill' : '';

  return (
    <>
      <header className={color ? 'scroll-bg mobile' : ' mobile'}>
        <div className="header-container">
          <div className="hamburger-menu">
            <button className="header-button" onClick={openHamburgerAside}>
              <img src={hamburger} alt="hamburger" className="hamburger-button" />
            </button>
          </div>
          <div className="logo-field">
            <div className="header-logo">
              <Link to="/">
                <img
                  src={logo}
                  alt="Our logo"
                  className={color ? 'scroll-fill logo-fill img-responsive ' : 'img-responsive'}
                />
              </Link>
            </div>
          </div>
          <div className="header-navbar">
            <ul className="navbar-menu">
              <li className="menu-item">
                <Link to="/" className={linkClassName}>
                  Home
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/shop" className={linkClassName}>
                  Shop
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/contact" className={linkClassName}>
                  Contact
                </Link>
              </li>
              <li className="menu-item pages-menu">
                <Link to="/" className={linkClassName}>
                  Pages
                </Link>
                <ul className="sub-menu">
                  <li className="sub-item">
                    <Link to="/checkout" className="menu-item-href">
                      Checkout
                    </Link>
                  </li>
                  <li className="sub-item">
                    <Link to="/ordertracking" className="menu-item-href">
                      Order Tracking
                    </Link>
                  </li>
                  <li className="sub-item">
                    <Link to="/wishlist" className="menu-item-href">
                      Wishlist
                    </Link>
                  </li>
                  <li className="sub-item">
                    <Link to="/cart" className="menu-item-href">
                      Cart
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <Link to="/about" className={linkClassName}>
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className="header-icons">
            <button
              className="Hicons-element icons-search search-btn formobileicon header-button"
              onClick={openSearchAside}
            >
              <CgSearch className={linkIconClassName} />
            </button>
            <button className="Hicons-element icons-account header-button">
              <Link to="/myAccount" className="account-btn">
                <AiOutlineUser className={linkIconClassName} />
              </Link>
            </button>
            <button
              className="Hicons-element icons-cart Cart-btn formobileicon header-button"
              onClick={openCartAside}
            >
              <CgShoppingCart className={linkIconClassName} />
              <span>0</span>
            </button>
          </div>
        </div>
      </header>
      <HeaderMenu />
      <SearchModal />
      <CartAside />
    </>
  );
}

export default Header;
