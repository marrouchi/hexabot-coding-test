import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <main className={styles.main}>
        <Hero />
      </main>
    </div>
  )
}
