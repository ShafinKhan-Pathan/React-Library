import React from "react";
import LandingImage from "../assets/DarkBlueUndrawEducation.svg";
import { Link } from "react-router-dom";
export default function Landing() {
  return (
    <section id="landingpage">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>USA's Most Awarded Online Library Platform</h1>
            <h2>
              Discover Your Next Favorite Book with Ease{" "}
              <span className="span__modifier">library</span>{" "}
            </h2>
            <Link to ="/books">
              <button className="btn">Explore Books</button>
            </Link>
          </div>
          <figure className="header__image--wrapper">
          <img src={LandingImage} alt="" />
        </figure>
        </div>
      </header>
    </section>
  );
}
