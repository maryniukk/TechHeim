import { Dialog } from '@headlessui/react'
import React, { useState } from 'react'
import styles from './Button.module.scss'

const Button = () => {
  const [isModalOpen, setIsModalOpen] = useState(false) // useState for modal

  return (
    <div className={styles.buttonWrapper}>
      <a onClick={() => setIsModalOpen(true)} href="#" className={styles.button}>
        Explore more
      </a>

      {isModalOpen && <div className={styles.overlay}></div>}

      <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)} className={styles.modalWindow}>
        <Dialog.Panel>
          <button onClick={() => setIsModalOpen(false)}>x</button>

          <Dialog.Title className={styles.title}>Log in to Tech Heim</Dialog.Title>

          <Dialog.Description>
            <div>
              <input className={styles.inputMail} type="text" placeholder="Email"></input>
            </div>
            <div>
              <input className={styles.inputPassword} type="password" placeholder="Password"></input>
            </div>
          </Dialog.Description>
        </Dialog.Panel>
      </Dialog>
    </div>
  )
}

export default Button
