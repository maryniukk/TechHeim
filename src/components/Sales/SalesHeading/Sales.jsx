import React from 'react'
import SalesCarousel from '../SalesCarousel/SalesCarousel'
import styles from '../SalesCarousel/SalesCarousel.module.scss'
import SalesArray from './SalesArray.js'
import SalesTitle from './SalesTitle'
const Sales = () => {
  return (
    <div>
      <div className={styles.flex}>
        <SalesTitle />
        <div className={styles.boxPadding}>
          <SalesCarousel SalesArray={SalesArray} />
        </div>
      </div>
    </div>
  )
}

export default Sales
