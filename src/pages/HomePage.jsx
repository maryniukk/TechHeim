import React from 'react'
import styles from '../App.module.scss'
import Header from '../components/Header/Header'
import Heading from '../components/Hero/Heading/Heading'
import HeroImg from '../components/Hero/HeroImg/HeroImg'
import NewProducts from '../components/NewProducts/NewProducts'
import Sales from '../components/Sales/SalesHeading/Sales'
import TopBrands from '../components/TopBrands/TopBrands'
const HomePage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.heroContent}>
        <Heading />
        <HeroImg />
      </div>
      <Sales />
      <NewProducts />
      <TopBrands />
    </div>
  )
}

export default HomePage