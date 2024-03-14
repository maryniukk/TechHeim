import React, { useState } from 'react'
import styles from './ModalRegistrationForm.module.scss'
import ModalWindow from './ModalWindow'

const ModalRegistrationForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false) // useState for modal

  return (
    <div>
      <div className={styles.buttonWrapper}>
        <a onClick={() => setIsModalOpen(true)} href="#" className={styles.button}>
          Explore more
        </a>
        {isModalOpen && <div className={styles.overlay}></div>}
      </div>
      <ModalWindow isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  )
}

export default ModalRegistrationForm
