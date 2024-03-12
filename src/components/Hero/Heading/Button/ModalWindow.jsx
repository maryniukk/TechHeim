import { Dialog } from '@headlessui/react'
import React from 'react'
import closeImg from '../../../../img/closeButton.svg'
import closedEyeImg from '../../../../img/eye-password-hide.png'
import eyeImg from '../../../../img/eye.png'
import styles from './ModalRegistrationForm.module.scss'
const ModalWindow = ({ isModalOpen, setIsModalOpen }) => {
  const [showPassword, setShowPassword] = React.useState(false) // useState for password
  const [isShowed, setIsShowed] = React.useState(false)
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
            <input
              className={styles.inputPassword}
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
            ></input>
            <label onClick={() => setShowPassword(!showPassword)} className={styles.showPassword}>
              <div className={styles.eye}>
                <img width={25} src={showPassword ? eyeImg : closedEyeImg}></img>
              </div>
            </label>
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
