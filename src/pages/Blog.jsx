import React, { useEffect, useState } from 'react'
import styles from '../App.module.scss'
import Header from '../components/Header/Header'

const Blog = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
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
      {data ? (
        <div>
          <h3>{data.title}</h3>
          <p>{data.completed ? 'Completed' : 'Not completed'}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Blog
