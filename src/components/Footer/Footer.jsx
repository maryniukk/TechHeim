import React from 'react'
import Company from './Company/Company'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div>
      <div className={styles.footerBox}>
        <Company />
      </div>
    </div>
  )
}

export default Footer
