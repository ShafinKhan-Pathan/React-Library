import React from "react";
import Feature from "../ui/Book.jsx";
import { books } from "../data.js";
export default function Features() {
  return (
    <section id="features">
      <div className="section__container">
        <div className="section__row">
          <h1 className="features__subtitle">
            Featured <span className="span__modifier">Book !!</span>
          </h1>
          <div className="features__wrapper">
            {books
              .filter((book) => book.rating === 5)
              .slice(0, 4)
              .map((book) => (
                <Feature book={book} key={book.id} />
              ))}
            
          </div>
        </div>
      </div>
    </section>
  );
}
