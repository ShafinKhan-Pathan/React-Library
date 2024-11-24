import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {books} from '../data'
import Feature from '../ui/Book'
export default function Discounted() {
  return (
    <section id="latest">
        <div className="latest__container">
            <div className="latest__row">
                <h1 className="latest__subtitle">Discounted <span className="span__modifier">Books</span></h1>
                <div className="latest__wrapper">
                    
                        {
                            books.filter(book => book.salePrice > 0)
                            .slice(0,8)
                            .map((book) => <Feature book={book} key={book.id}/>)
                        }
                   
                </div>
            </div>
        </div>
    </section>
  )
}
