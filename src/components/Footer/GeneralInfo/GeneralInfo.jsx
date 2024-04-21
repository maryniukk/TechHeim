import React from 'react'
import Company from './Company/Company'
import styles from './GeneralInfo.module.scss'
import Info from './Info/Info'
const GeneralInfo = () => {
  return (
    <div className={styles.container}>
      <div>
        <Company />
      </div>
      <div>
        <Info />
      </div>
    </div>
  )
}
export default GeneralInfo

