import React from 'react'
import styles from './categories.module.scss'
import categoriesArray from './categoriesArray'
const Categories = () => {
  return (
    <div className={styles.categoriesContainer}>
      {categoriesArray.map((item) => (
        <div key={item.id} className={styles.container}>
          <div key={item.id} className={styles.categoryItem}>
            <a key={item.id} href="#!">
              <img width={190} src={item.image} alt={categoriesArray.id} />
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Categories
