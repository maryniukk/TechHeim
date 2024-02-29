import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.scss'

const Navbar = () => {
  const navbarArray = [
    { name: 'Home', id: 'home', url: '/' },
    { name: 'Products', id: 'products', url: '/products' },
    { name: 'Blog', id: 'blog', url: '/blog' },
    { name: 'FAQ', id: 'faq', url: '/faq' },
    { name: 'Contact Us', id: 'contact', url: '/contact' },
  ]

  const navbarList = navbarArray.map((item) => (
    <div key={item.id}>
      <Link className={styles.link} to={item.url}>
        {item.name}
      </Link>
    </div>
  ))

  return <div className={styles.link}>{navbarList}</div>
}

export default Navbar
