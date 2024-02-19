import React from 'react'
import styles from './newProducts.module.scss'
const NewProductsHeading = () => {
  return (
    <div className={styles.box}>
    <div className={styles.flex}>
      <div>
        <h2>New Products</h2>
      </div>
      <div className={styles.link}>
        <a>View All </a>
      </div>
    </div>
    <hr className={styles.line}/>
  </div>
  )
}

export default NewProductsHeading