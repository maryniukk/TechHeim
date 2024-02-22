import React from 'react'
import star from '../../../img/Star.png'
import styles from './NewProductsCatalog.module.scss'
import unmappedArray from './NpArray'
const NewProductsCatalog = () => {
  const mappedArray = unmappedArray.map((array, index) => (
    <div key={index}>
      <div className={styles.box} key={index}>
        <img className={styles.productImg} src={array.productImg} alt="" />
        <p className={styles.productName}>{array.productName}</p>
        <p>{array.price}</p>
        <div className={styles.flex}>
          <img className={styles.img} src={star} alt="" />
          <p>{array.rating}</p>
        </div>
      </div>
    </div>
  ))
  return <div>{mappedArray}</div>
}

export default NewProductsCatalog
