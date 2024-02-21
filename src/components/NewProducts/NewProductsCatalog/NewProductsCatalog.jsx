import React from 'react'
import unmappedArray from './NpArray'
const NewProductsCatalog = () => {
  const mappedArray = unmappedArray.map((array) => (
    <div>
      <img src={array.productImg} alt="" />
      <p>{array.productName}</p>
      <p>{array.price}</p>
      <img src={array.starImg} alt="" />
      <p>{array.rating}</p>
    </div>
  ))
  return (
    <div>
      <div>{mappedArray}</div>
    </div>
  )
}

export default NewProductsCatalog
