import React from 'react'
import styles from './Footer.module.scss'
import GeneralInfo from './GeneralInfo/GeneralInfo'

const Footer = () => {
  return (
    <div>
      <div className={styles.footerBox}>
        <GeneralInfo />
      </div>
    </div>
  )
}

export default Footer
