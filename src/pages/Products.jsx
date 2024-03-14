import React from 'react'
import styles from '../App.module.scss'
import Header from '../components/Header/Header'
import ProductsList from '../components/ProductsList/ProductsList'

const Products = () => {
  return (
    <div className={styles.container}>
      <Header />
      <ProductsList />
    </div>
  )
}

export default Products
