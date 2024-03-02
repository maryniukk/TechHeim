import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import styles from './App.module.scss'
import Categories from './components/Categories/Categories.jsx'
import Header from './components/Header/Header.jsx'
import Heading from './components/Hero/Heading/Heading.jsx'
import HeroImg from './components/Hero/HeroImg/HeroImg.jsx'
import NewProducts from './components/NewProducts/NewProducts.jsx'
import Sales from './components/Sales/SalesHeading/Sales.jsx'
import HomePage from './pages/HomePage.jsx'
import Products from './pages/Products.jsx'

export const routes = { home: '/', products: '/products', blog: '/blog', faq: '/faq', contact: '/contact' }

function App() {
  return (
    <div className={styles.container}>
      <BrowserRouter>
        <Header />
        <div className={styles.heroContent}>
          <Heading />
          <HeroImg />
        </div>
        <Categories />
        <Sales />
        <NewProducts />
        <Routes>
          <Route path={routes.home} element={<HomePage />} />
          <Route path={routes.products} element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
