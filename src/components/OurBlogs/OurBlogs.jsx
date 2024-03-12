import React from 'react'
import { Link } from 'react-router-dom'
import styles from './OurBlogs.module.scss'
const OurBlogs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h2 className={styles.h2}>OurBlogs</h2>
        <div>
          <div className={styles.linkBox}>
            <Link className={styles.link} to="/blog">
              View All
            </Link>
          </div>
        </div>
      </div>
      <hr className={styles.line} />
    </div>
  )
}

export default OurBlogs
