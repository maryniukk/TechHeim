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
          <Dialog.Title>Log in to Tech Heim</Dialog.Title>

          <Dialog.Description>
            <input type="text" placeholder="Email"></input>
            <input type="password" placeholder="Password"></input>
          </Dialog.Description>
        </Dialog.Panel>
      </Dialog>
    </div>
  )
}

export default Button
