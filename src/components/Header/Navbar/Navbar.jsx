import React from 'react'
import styles from './Navbar.module.scss'

const Navbar = () => {
  const navbarArray = [
    { name: 'Home', id: 'home' },
    { name: 'Products', id: 'products' },
    { name: 'Blog', id: 'blog' },
    { name: 'FAQ', id: 'faq' },
    { name: 'Contact Us ', id: 'contact' },
  ]

  const navbarList = navbarArray.map((item) => (
    <div key={item.id}>
      <a className={styles.link} href="/">
        {item.name}
      </a>
    </div>
  ))

  return <div className={styles.link}>{navbarList}</div>
}

export default Navbar
