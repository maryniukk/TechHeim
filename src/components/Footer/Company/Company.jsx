import React from 'react'
import AmericanExpressImg from '../../../img/american express.png'
import masterCardImg from '../../../img/master card.png'
import PayPalImg from '../../../img/paypal.png'
import visaImg from '../../../img/visa.png'
import styles from './Company.module.scss'

const Company = () => {
  return (
    <div>
      <div>
        <h3 className={styles.h3}>Company</h3>
        <p className={styles.text}>About us</p>
        <p className={styles.text}>Blog</p>
        <p className={styles.text}>Returns</p>
        <p className={styles.text}>Order status</p>
      </div>
      <div className={styles.servicesLinks}>
        <div>
          <img width={23} src={PayPalImg} alt="PayPal" />
        </div>
        <div>
          <img width={23} src={AmericanExpressImg} alt="AmericanExpress" />
        </div>
        <div>
          <img width={23} src={visaImg} alt="Visa" />
        </div>
        <div>
          <img width={23} src={masterCardImg} alt="Master Card" />
        </div>
      </div>
    </div>
  )
}
export default Company
