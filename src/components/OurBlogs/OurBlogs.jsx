import React from 'react'
import { Link } from 'react-router-dom'
import styles from './OurBlogs.module.scss'
const OurBlogs = () => {
  return (
    <div>
      <div className={styles.box}>
        <div>OurBlogs</div>
        <div>
          <div>
            <Link className={styles.link} to="/blog">
              View All
            </Link>
          </div>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default OurBlogs
