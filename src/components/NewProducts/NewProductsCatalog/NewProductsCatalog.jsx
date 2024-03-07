import React from 'react'
import star from '../../../img/Star.png' // Импортируем изображение звездочки
import styles from './NewProductsCatalog.module.scss'
import unmappedArray from './NpArray'

const NewProductsCatalog = () => {
  const shortName = ({ productName }) => {
    return (
      <div className={styles.flex}>
        {productName.length > 25 ? `${productName.substring(0, 25)}...` : productName}
      </div>
    )
  }
  const mappedArray = unmappedArray.map((array, index) => (
    <div className={styles.wholeBox} key={index}>
      <div className={styles.box} key={index}>
        <img className={styles.productImg} src={array.productImg} alt="" />
        <p className={styles.productName}>{array.productName}</p>
        <p>{array.price}</p>

        <div className={styles.ratingContainer}>
          <img className={styles.ratingStar} src={star} alt="Rating" />
          <p className={styles.ratingValue}>{array.rating}</p>
        </div>
      </div>
    </div>
  ))

  return <div className={styles.flex}>{mappedArray}</div>
}

export default NewProductsCatalog
