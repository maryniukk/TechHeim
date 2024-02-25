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
        <div className={styles.bg}>
          <Dialog.Panel className={styles.popup}>
            <Dialog.Title>Название</Dialog.Title>
            <Dialog.Description>Описание</Dialog.Description>
            <button onClick={() => setIsOpen(false)}>x</button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  )
}

export default Button
