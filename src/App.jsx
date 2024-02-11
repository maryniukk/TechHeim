import Header from '../components/Header/Header.jsx'
import Heading from '../components/Hero/Heading/Heading.jsx'
import HeroImg from '../components/Hero/HeroImg/HeroImg.jsx'
import './App.css'
import styles from './App.module.scss'
function App() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <Heading />
          <HeroImg />
        </div>
      </div>
    </div>
  )
}

export default App
