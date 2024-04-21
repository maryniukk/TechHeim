import React from 'react'
import basketImg from '../../../img/basket.svg'
import profileImg from '../../../img/profile.svg'
import searchImg from '../../../img/search.svg'
import styles from './Profile.module.scss'
const Profile = () => {
  return (
    <div className={styles.images}>
      <a href="#!">
        <img src={searchImg} alt="Search" />
      </a>
      <a href="#!">
        <img src={basketImg} alt="Basket" />
      </a>
      <a href="#!">
        <img src={profileImg} alt="Profile" />
      </a>
    </div>
  )
}

export default Profile
