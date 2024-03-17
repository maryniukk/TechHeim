import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Info.module.scss'
const Info = () => {
  return (
    <div>
      <div className={styles.companyLinks}>
        <h3 className={styles.h3}>Info</h3>
        <div className={styles.wrapper}>
          <div>
            <Link to={'/faq'} className={styles.text}>
              <p>How it works?</p>
            </Link>
          </div>
          <div>
            <Link to={'/faq'} className={styles.text}>
              <p>Our promises</p>
            </Link>
          </div>
          <div>
            <Link to={'/faq'} className={styles.text}>
              <p>FAQ</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
