import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../assets/Personal__logo2.png";
import { Link } from "react-router-dom";
export default function Nav({countCartItems}) {
  function openMenu() {
    document.body.classList += " menu--open";
  }
  function closeMenu() {
    document.body.classList.remove("menu--open");
  }
  return (
    <nav>
      <div className="nav__container">
        <Link to="/">
          <img src={Logo} alt="" className="nav__logo" />
        </Link>
        <ul className="nav__links">
          <li>
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>
          <li>
            <Link to="#" className="nav__link no-cursor">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/books" className="nav__link nav__link--primary">
              Books
            </Link>
          </li>
          <li className="nav__icon">
            <Link to="/cart">
              <FontAwesomeIcon icon="shopping-cart" className="shopping__cart" />
              
            </Link>
            {
              countCartItems() > 0 && <span className="cart__length">{countCartItems()}</span>
            }
            
          </li>
          <button className="btn__menu" onClick={openMenu}>
            <FontAwesomeIcon icon="bars" />
          </button>
        </ul>
        <div className="menu__drop">
          <button className="btn__menu btn__menu--close" onClick={closeMenu}>
            <FontAwesomeIcon icon="times" />
          </button>
          <ul className="menu__links">
            <li className="menu__list">
              <Link to="/" className="menu__link" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="menu__list">
              <Link to="/books" className="menu__link" onClick={closeMenu}>
                Books
              </Link>
            </li>
            <li className="menu__list">
              <Link to="/cart" className="menu__link" onClick={closeMenu}>
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
