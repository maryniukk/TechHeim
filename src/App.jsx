import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Categories from './components/Categories/Categories.jsx'
import Header from './components/Header/Header.jsx'
import Heading from './components/Hero/Heading/Heading.jsx'
import HeroImg from './components/Hero/HeroImg/HeroImg.jsx'
import Sales from './components/Sales/Sales.jsx'
import './App.css'
import styles from './App.module.scss'

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
      </div>
    </BrowserRouter>
  )
}

export default App
