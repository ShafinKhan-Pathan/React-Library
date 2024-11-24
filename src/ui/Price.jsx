import React from 'react'

export default function Price({salePrice, originalPrice}) {
  return (
    <p className="feature__price">
        {salePrice ? (
          <>
            <span className="feature__normal--price">
              ${originalPrice.toFixed(2)}
            </span>{" "}
            ${salePrice.toFixed(2)}
          </>
        ) : (
          <>${originalPrice.toFixed(2)}</>
        )}
      </p>
  )
}
