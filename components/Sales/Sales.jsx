import React from 'react'
import styles from './Sales.module.scss'
const Sales = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <h3 className={styles.h3}>Products On Sale</h3>
        <p className={styles.p}>Shop Now!</p>
        <div className={styles.linkPadding}>
          <a className={styles.link} href="#!">
            View All &gt;
          </a>
        </div>
      </div>
    </div>
  )
}

export default Sales
