import { Dialog } from '@headlessui/react'
import React from 'react'
import closeImg from '../../../../img/closeButton.svg'
import styles from './ModalRegistrationForm.module.scss'
const ModalWindow = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)} className={styles.modalWindow}>
      <Dialog.Panel className={styles.modalWindowPadding}>
        <div className={styles.imgContainer}>
          <img src={closeImg} className={styles.closeButton} onClick={() => setIsModalOpen(false)}></img>
        </div>
        <Dialog.Title className={styles.title}>Sign up to Tech Heim</Dialog.Title>
        <Dialog.Description>
          <div>
            <input className={styles.inputUserName} type="text" placeholder="Username"></input>
          </div>
          <div>
            <input className={styles.inputMail} type="text" placeholder="Email"></input>
          </div>
          <div className={styles.passwordAbsolute}>
            <input className={styles.inputPassword} type="password" placeholder="Password"></input>
            <label className={styles.showPassword}>Show password</label>
          </div>
          <div className={styles.loggIn}>
            <input className={styles.rememberMe} type="checkbox" name="" id="" />
            <label className={styles.keepMeLoggedIn}>I agree with a terms and conditions</label>
          </div>
          <div className={styles.logInBtnWrapper}>
            <a href="#" className={styles.logInButton}>
              Sign Up
            </a>
          </div>
        </Dialog.Description>
      </Dialog.Panel>
    </Dialog>
  )
}

export default ModalWindow
