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
      {showModal ? <ModalWindow /> : null}
    </div>
  )
}

export default Button
