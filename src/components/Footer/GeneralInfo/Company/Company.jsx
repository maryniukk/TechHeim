import React from 'react'
import { Link } from 'react-router-dom'
import AmericanExpressImg from '../../../../img/american express.png'
import masterCardImg from '../../../../img/master card.png'
import PayPalImg from '../../../../img/paypal.png'
import visaImg from '../../../../img/visa.png'

import styles from './Company.module.scss'

const Company = () => {
  return (
    <div>
      <div className={styles.companyLinks}>
        <h3 className={styles.h3}>Company</h3>
        <div>
          <Link to={'/about'} className={styles.text}>
            About us
          </Link>
        </div>
        <div>
          <Link to={'/blog'} className={styles.text}>
            Blog
          </Link>
        </div>
        <div>
          <Link to={'/returns'} className={styles.text}>
            Returns
          </Link>
        </div>
        <div>
          <Link to={'/contact'} className={styles.text}>
            Order status
          </Link>
        </div>
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
