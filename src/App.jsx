import Header from '../components/Header/Header.jsx'
import Heading from '../components/Hero/Heading/Heading.jsx'
import './App.css'
import styles from './App.module.scss'
function App() {
  return (
    <div className={styles.container}>
      <div>
        <Header />
      </div>
      <div>
        <Heading />
      </div>
    </div>
  )
}

export default App
