import React from 'react'
import { useNavigate } from 'react-router-dom'
import basketImg from '../../../img/basket.svg'
import profileImg from '../../../img/profile.svg'
import searchImg from '../../../img/search.svg'
import Basket from '../Basket/Basket'
import styles from './Profile.module.scss'

const Profile = () => {
  const [isOpen, setIsOpen] = React.useState(false) //isBasketOpen?

  const navigate = useNavigate() //for redirect to basket page
  return (
    <div className={styles.images}>
      <a href="#!">
        <img src={searchImg} alt="Search" />
      </a>
      <a onClick={() => setIsOpen(!isOpen ? navigate('/basket') : null)}>
        <img src={basketImg} alt="Basket" />
      </a>
      {isOpen && <Basket />}
      <a href="#!">
        <img src={profileImg} alt="Profile" />
      </a>
    </div>
  )
}

export default Profile
