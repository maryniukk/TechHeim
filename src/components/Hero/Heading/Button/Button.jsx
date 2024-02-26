import { Dialog } from '@headlessui/react'
import React, { useState } from 'react'
import styles from './Button.module.scss'

const Button = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.buttonWrapper}>
      <a onClick={() => setIsOpen(true)} href="#" className={styles.button}>
        Explore more
      </a>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className={styles.modalWindow}>
        <Dialog.Panel>
          <button onClick={() => setIsOpen(false)}>x</button>
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
