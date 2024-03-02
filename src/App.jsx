import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import styles from './App.module.scss'
import Categories from './components/Categories/Categories.jsx'
import Header from './components/Header/Header.jsx'
import Heading from './components/Hero/Heading/Heading.jsx'
import HeroImg from './components/Hero/HeroImg/HeroImg.jsx'
import NewProducts from './components/NewProducts/NewProducts.jsx'
import Sales from './components/Sales/SalesHeading/Sales.jsx'

function App() {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <Header />
        <div className={styles.heroContent}>
          <Heading />
          <HeroImg />
        </div>
        <Categories />
        <Sales />
        <NewProducts />
      </div>
    </BrowserRouter>
  )
}

export default App
