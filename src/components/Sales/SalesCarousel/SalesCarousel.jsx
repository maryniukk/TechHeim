import React from 'react'
import styles from '../SalesCarousel/SalesCarousel.module.scss'

// Компонент для отображения длинного текста
const LongText = ({ productName }) => {
  return (
    <h3 className={styles.h3}>
      {productName.length > 25 ? `${productName.substring(0, 25)}...` : productName}
    </h3>
  )
}

const SalesCarousel = ({ SalesArray }) => {
  const corouselList = SalesArray.map((sales, index) => (
    <div key={index}>
      <div className={styles.boxPadding}>
        <div className={styles.box}>
          <div className={styles.percent}>
            <p>{sales.SalePercent}</p>
          </div>
          <img src={sales.image} alt="sales-img" />
          <LongText className={styles.h3} productName={sales.productName} />

          <div className={styles.priceFlex}>
            <div>
              <p className={styles.noDiscountPrice}>{sales.noDiscountPrice}</p>
            </div>
            <div>
              <p className={styles.discountPrice}> {sales.discountPrice}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ))

  return <div className={styles.flex}>{corouselList}</div>
}

export default SalesCarousel
