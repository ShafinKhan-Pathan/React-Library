import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Rating({rating}) {
  return (
    <div className="feature__book--rating">
        {new Array(Math.floor(rating)).fill(0).map((_, index) => (
          <FontAwesomeIcon icon="star" key={index} />
        ))}
        {!Number.isInteger(rating) && (
          <FontAwesomeIcon icon="star-half-alt" />
        )}
      </div>
  )
}
