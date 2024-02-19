import React from 'react'
import SalesTitle from './SalesTitle'
import SalesCarousel from '../SalesCarousel/SalesCarousel'
import styles from '../SalesCarousel/SalesCarousel.module.scss'
import SalesArray from './SalesArray.js';
const Sales = () => {
  return (
    <div>
    <div className={styles.flex}>

      <SalesTitle/>
        <div className={styles.boxPadding}>
          <SalesCarousel SalesArray={SalesArray} />
        </div>
        </div>
    </div>
  )
}

export default Sales
