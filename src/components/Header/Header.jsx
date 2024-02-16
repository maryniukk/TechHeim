import styles from './Header.module.scss'
import Logo from './Logo/Logo.jsx'
import Navbar from './Navbar/Navbar.jsx'
import Profile from './Profile/Profile.jsx'
const Header = () => {
  return (
    <div className={styles.list}>
      <Logo />
      <Navbar />
      <div className={styles.right}>
        <Profile />
      </div>
    </div>
  )
}
export default Header
