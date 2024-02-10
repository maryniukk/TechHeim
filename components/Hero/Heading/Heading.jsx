import React from 'react'
import styles from './Heading.module.scss'

const Heading = () => {
  return (
    <div className={styles.heading}>
      <h1 className={styles.h1}>Tech Heim</h1>
      <h2 className={styles.h2}>
        "Join the <span className={styles.orange}>digital revolution</span>"
      </h2>
    </div>
  )
}

export default Heading
