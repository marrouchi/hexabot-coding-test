import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h2>John Doe</h2>
          <p className={styles.tagline}>Web Developer</p>
        </div>

        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li><a href="#home" className={styles.navLink}>Home</a></li>
            <li><a href="#about" className={styles.navLink}>About</a></li>
            <li><a href="#portfolio" className={styles.navLink}>Portfolio</a></li>
            <li><a href="#contact" className={styles.navLink}>Contact</a></li>
          </ul>
        </nav>

        <button className={styles.mobileMenuButton} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}
