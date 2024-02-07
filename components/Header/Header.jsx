import styles from './Header.module.scss'
import Logo from './Logo.jsx'
import Navbar from './Navbar.jsx'
const Header = () => {
  return (
    <div className={styles.list}>
      <Logo />
      <Navbar />
    </div>
  )
}
export default Header
