import React from 'react'
import appleImg from '../../img/AppleLogo.png'
import canonLogo from '../../img/CanonLogo.png'
import huaweiImg from '../../img/HuaweiLogo.png'
import lenovoImg from '../../img/LenovoLogo.png'
import samsungImg from '../../img/Samsung.png'
import sonyImg from '../../img/Sony.png'
import styles from './TopBrands.module.scss'

const TopBrands = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>Top Brands</h2>
      <hr />
      <div className={styles.box}>
        <div className={styles.boxItem}>
          <a href="https://www.apple.com/">
            <img src={appleImg} alt="AppleLogo" />
          </a>
        </div>
        <div className={styles.boxItem}>
          <a href="https://www.sony.no/">
            <img src={sonyImg} alt="SonyLogo" />
          </a>
        </div>
        <div className={styles.boxItem}>
          <a href="https://www.samsung.com/no/">
            <img src={samsungImg} alt="SamsungLogo" />
          </a>
        </div>
        <div className={styles.boxItem}>
          <a href="https://www.samsung.com/no/">
            <img src={canonLogo} alt="CanonLogo" />
          </a>
        </div>
        <div className={styles.boxItem}>
          <a href="https://consumer.huawei.com/no/">
            <img src={huaweiImg} alt="HuaweiLogo" />
          </a>
        </div>
        <div className={styles.boxItem}>
          <a href="https://consumer.huawei.com/no/">
            <img src={lenovoImg} alt="lenovoLogo" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default TopBrands
