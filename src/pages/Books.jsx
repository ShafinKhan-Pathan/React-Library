import React, { useState } from "react";
import Book from "../ui/Book";

export default function Books({ books: initialBook }) {
  const [books, setBooks] = useState(initialBook);
  function filteredBooks(filter) {
    if (filter === "LOW_TO_HIGH") {
      setBooks(
        books
          .slice()
          .sort(
            (a, b) =>
              (a.salePrice || a.originalPrice) -
              (b.salePrice || b.originalPrice)
          )
      );
    }
    if (filter === "HIGH_TO_LOW") {
      setBooks(
        books
          .slice()
          .sort(
            (a, b) =>
              (b.salePrice || b.originalPrice) -
              (a.salePrice || a.originalPrice)
          )
      );
    }
    if (filter === "RATING"){
        setBooks(books.slice().sort((a, b) => b.rating - a.rating))
    }
  }
  return (
    <div className="books__body">
      <main id="books__main">
        <section>
          <div className="container">
            <div className="row">
              <div className="books__header">
                <h2 className="section__title books__header--title">
                  All <span className="span__modifier">Books</span>
                </h2>
                <select
                  id="filter"
                  defaultValue="DEFAULT"
                  onChange={(event) => filteredBooks(event.target.value)}
                >
                  <option value="DEFAULT" disabled>
                    Sort
                  </option>
                  <option value="LOW_TO_HIGH">Price, Low to High</option>
                  <option value="HIGH_TO_LOW">Price, High to Low</option>
                  <option value="RATING">By Ratings</option>
                </select>
              </div>
              <div className="books books__loading">
                {/* <FontAwesomeIcon icon="spinner" /> */}
                {books.map((book) => (
                  <Book book={book} key={book.id} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
