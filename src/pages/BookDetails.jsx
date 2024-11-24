import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Rating from "../ui/Ratings";
import Price from "../ui/Price";
import Book from "../ui/Book";
export default function BookDetails({ books, addToCart, cart }) {
  const { id } = useParams();
  const book = books.find((book) => +book.id === +id);
  function addBookToCart(book) {
    addToCart(book);
  }
  function testing() {
    return cart.find((book) => +book.id === +id);
  }
  return (
    <div className="books__body">
      <main id="books__main">
        <div className="container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books" className="book__link">
                <h1 className="book__selected--title--top">Book</h1>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img src={book.url} alt="" />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">{book.title}</h2>
                <Rating rating={book.rating} />
                <Price
                  salePrice={book.salePrice}
                  originalPrice={book.originalPrice}
                />
                <div className="book__summary">
                  <h3 className="book__summary--title">Summary</h3>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ad, quas voluptates, architecto veniam debitis ullam
                    possimus explicabo adipisci nobis reiciendis sit voluptas
                    laborum est nesciunt. Eligendi quos accusantium perspiciatis
                    iure.
                  </p>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ad, quas voluptates, architecto veniam debitis ullam
                    possimus explicabo adipisci nobis reiciendis sit voluptas
                    laborum est nesciunt. Eligendi quos accusantium perspiciatis
                    iure.
                  </p>
                </div>
                {testing() ? (
                  <Link to="/cart">
                    <button className="btn btn__cart">Checkout</button>
                  </Link>
                ) : (
                  <button
                    className="btn btn__cart"
                    onClick={() => addBookToCart(book)}
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="books__container">
            <div className="row">
              <div className="book__selected--top">
                <h1 className="book__selected--title--top">
                  Recommended Books :
                </h1>
              </div>
              <div className="books">
                {books
                  .filter((book) => book.rating === 5 && +book.id !== +id)
                  .slice(0, 4)
                  .map((book) => (
                    <Book book={book} key={book.id} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
