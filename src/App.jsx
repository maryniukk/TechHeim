import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Basket from './components/Header/Basket/Basket'
import Blog from './pages/Blog'
import HomePage from './pages/HomePage.jsx'
import Products from './pages/Products.jsx'

export const routes = {
  home: '/',
  products: '/products',
  blog: '/blog',
  faq: '/faq',
  contact: '/contact',
  basket: '/basket',
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.home} element={<HomePage />} />
        <Route path={routes.products} element={<Products />} />
        <Route path={routes.blog} element={<Blog />} />
        <Route path={routes.basket} element={<Basket />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
