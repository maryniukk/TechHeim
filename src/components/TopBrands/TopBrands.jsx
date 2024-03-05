import React from 'react'
import appleImg from '../../img/AppleLogo.png'
import sonyImg from '../../img/Sony.png'
import styles from './TopBrands.module.scss'
const TopBrands = () => {
  return (
    <div className={styles.box}>
      <h2>Top Brands</h2>
      <hr />
      <div>
        <a href="https://www.apple.com/">
          <img src={appleImg} alt="Apple" />
        </a>
      </div>
      <div>
        <a href="https://www.sony.no/">
          <img src={sonyImg} alt="Sony" />
        </a>
      </div>
      <div>
        <a href="apple.com">
          <img src={img} alt="Apple" />
        </a>
      </div>
    </div>
  )
}

export default TopBrands
