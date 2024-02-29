import { Dialog } from '@headlessui/react'
import React from 'react'
import closeImg from '../../../../img/closeButton.svg'
import styles from './ModalRegistrationForm.module.scss'
const ModalWindow = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)} className={styles.modalWindow}>
      <Dialog.Panel>
        <div className={styles.imgContainer}>
          <img src={closeImg} className={styles.closeButton} onClick={() => setIsModalOpen(false)}></img>
        </div>
        <Dialog.Title className={styles.title}>Log in to Tech Heim</Dialog.Title>
        <Dialog.Description>
          <div>
            <input className={styles.inputMail} type="text" placeholder="Email"></input>
          </div>
          <div>
            <input className={styles.inputPassword} type="password" placeholder="Password"></input>
          </div>
          <div className={styles.loggIn}>
            <input className={styles.rememberMe} type="checkbox" name="" id="" />
            <label className={styles.keepMeLoggedIn}>Keep me logged in</label>
          </div>
          <div className={styles.logInBtnWrapper}>
            <a href="#" className={styles.logInButton}>
              Log In
            </a>
          </div>
        </Dialog.Description>
      </Dialog.Panel>
    </Dialog>
  )
}

export default ModalWindow
