import React from 'react'
import styles from './Button.module.scss'
const Button = () => {
  const handleClick = () => {
    console.log('button check')
  }
  return (
    <div className={styles.buttonWrapper}>
      <a href="#!" onClick={handleClick} className={styles.button}>
        Explore more
      </a>
    </div>
  )
}

export default Button
