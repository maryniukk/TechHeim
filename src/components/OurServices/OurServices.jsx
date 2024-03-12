import React from 'react'
import img01 from '../../img/img01.png'
import img02 from '../../img/img02.png'
import img03 from '../../img/img03.png'
import img04 from '../../img/img04.png'
import styles from './OurServices.module.scss'
const OurServices = () => {
  return (
    <>
      <div>
        <div className={styles.box}>
          <div>
            <img src={img01} alt="01" />
          </div>
          <div>
            <p>Latest and Greatest Tech</p>
          </div>
          <div>
            <img src={img02} alt="01" />
          </div>
          <div>
            <p>Guarantee</p>
          </div>
          <div>
            <img src={img03} alt="01" />
          </div>
          <div>
            <p>Free Shipping over 1000$</p>
          </div>
          <div>
            <img src={img04} alt="01" />
          </div>
          <div>
            <p>24/7 Support</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurServices
