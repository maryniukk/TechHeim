import React from 'react'
import { Link } from 'react-router-dom'
import styles from './SalesTitle.module.scss'
const SalesTitle = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <div>
          <h3 className={styles.h3}>Products On Sale</h3>
          <p className={styles.p}>Shop Now!</p>
          <div className={styles.linkPadding}>
            <Link className={styles.link} to="/products">
              View All &gt;
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SalesTitle
