import React from "react";
import Logo from "../assets/Personal__logo2.png";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row footer__row">
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <figure className="footer__logo">
              <img src={Logo} alt="" className="footer__logo--image" />
            </figure>
          </Link>
          <div className="footer__lists">
            <Link to="/" className="footer__link">
              Home
            </Link>
            <Link to="/books" className="footer__link">
              Books
            </Link>
            <Link to="/cart" className="footer__link">
              Cart
            </Link>
            <Link to="#" className="footer__link no-cursor">
              Contact
            </Link>
          </div>
          <p className="footer__para">Copyright &copy; 2024 ShafinKhan</p>
        </div>
      </div>
    </footer>
  );
}
