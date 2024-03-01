import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import styles from './App.module.scss'
import Categories from './components/Categories/Categories.jsx'
import Header from './components/Header/Header.jsx'
import Heading from './components/Hero/Heading/Heading.jsx'
import HeroImg from './components/Hero/HeroImg/HeroImg.jsx'
import NewProducts from './components/NewProducts/NewProducts.jsx'
import Sales from './components/Sales/SalesHeading/Sales.jsx'
import Blog from './pages/Blog'
import Products from './pages/Products'

function App() {
  return (
    <Router>
      <div className={styles.container}>
        <Header />
        <div className={styles.heroContent}>
          <Heading />
          <HeroImg />
        </div>
        <Categories />
        <Sales />
        <NewProducts />
        <Routes>
          <Route exact path="/" component={<App />} />
          <Route exact path="/products" component={<Products />} />
          <Route exact path="/blog" component={<Blog />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
