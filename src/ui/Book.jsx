import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "./Ratings";
import Price from "./Price";
export default function Feature({ book }) {
  const [img, setImage] = useState()
  useEffect(() => {
    const image = new Image()
    image.src = book.url
    image.onload = () => {
      setTimeout(() => {
        setImage(image)
      }, 500);
     
    }
  })

  return (
    <div className="feature">
      {img ? <><Link to={`/books/${book.id}`}>
        <figure className="feature__image--wrapper">
          <img className="book__image" src={book.url} alt=""/>
        </figure>
      </Link>
      <p className="feature__booktitle">{book.title}</p>
      <Rating rating={book.rating}/>
      <Price salePrice={book.salePrice} originalPrice={book.originalPrice}/></>
      :
      <><div className="book__img--skeleton"></div>
      <div className="skeleton book__title--skeleton"></div>
      <div className="skeleton book__rating--skeleton"></div>
      <div className="skeleton book__price--skeleton"></div></>

      }
    </div>
  );
}
