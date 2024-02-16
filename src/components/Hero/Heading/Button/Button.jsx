import React, { useState } from 'react'
import styles from './Button.module.scss'

const Button = () => {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    // Функция для открытия модального окна
    setShowModal(true)
  }

  const closeModal = () => {
    // Функция для закрытия модального окна
    setShowModal(false)
  }

  return (
    <div className={styles.buttonWrapper}>
      <a href="#!" onClick={openModal} className={styles.button}>
        Explore more
      </a>
    </div>
  )
}

export default Button
