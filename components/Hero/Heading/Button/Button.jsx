import React, { useState } from 'react'
import styles from './Button.module.scss'
const Button = () => {
  const [showModal, SetShowModal] = useState(false)

  const openModal = () => {
    // Function for form opening
    SetShowModal(true)
  }

  const closeModal = () => {
    // Function for form closing
    showModal(false)
  }

  const modalWindowLogic = () => {}

  return (
    <div className={styles.buttonWrapper}>
      <a href="#!" onClick={openModal} className={styles.button}>
        Explore more
      </a>
      {showModal ? (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={closeModal}>
              &times;
            </span>
            {/* Здесь вы можете разместить содержимое вашего модального окна */}
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Button
