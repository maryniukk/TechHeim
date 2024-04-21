import React from 'react'
import basketImg from '../../../img/basket.svg'
import profileImg from '../../../img/profile.svg'
import searchImg from '../../../img/search.svg'
import styles from './Profile.module.scss'
const Profile = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className={styles.images}>
      <a href="#!">
        <img src={searchImg} alt="Search" />
      </a>
      <a href="#!">
        <img src={basketImg} alt="Basket" />
      </a>
      <a href="#!" onClick={() => setIsOpen(!isOpen)}>
        <img src={profileImg} alt="Profile" />
        {isOpen && (
          <div>
            <div>
              <p>Profile</p>
            </div>
            <div>
              <p>Logout</p>
            </div>
          </div>
        )}
        }
      </a>
    </div>
  )
}

export default Profile
