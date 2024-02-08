import React from 'react'
import styles from './Profile.module.scss'
const Profile = () => {
  return (
    <div className={styles.images}>
      <a href="#!">
        <img src="../../../img/search.svg" alt="Search" />
      </a>
      <a href="#!">
        <img src="../../../img/basket.svg" alt="Basket" />
      </a>
      <a href="#!">
        <img src="../../../img/profile.svg" alt="Profile" />
      </a>
    </div>
  )
}

export default Profile
