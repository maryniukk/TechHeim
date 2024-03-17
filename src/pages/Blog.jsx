import React, { useEffect, useState } from 'react'
import styles from '../App.module.scss'
import Header from '../components/Header/Header'

const Blog = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments')
        const jsonData = await response.json()
        setData(jsonData)
      } catch (error) {
        console.log('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className={styles.container}>
      <Header />
      {data ? data.map((item) => <div key={item.id}>{item.name}</div>) : 'Loading...'}
      {data ? 'Success' : 'Error'}
    </div>
  )
}

export default Blog
