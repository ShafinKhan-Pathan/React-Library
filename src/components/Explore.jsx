import React from 'react'
import { Link } from 'react-router-dom'
export default function Explore() {
  return (
    <section id="morebooks">
            <div className="morebook__container">
                <div className="morebook__row">
                    <div className="morebooks__description">
                        <h1 className="morebook__subtitle">Explore More <span className="span__modifier"> Books </span></h1>
                        <Link to="/books"><button  className="morebooks__btn">Browse Books</button></Link>
                    </div>
                </div>
            </div>
        </section>
  )
}
