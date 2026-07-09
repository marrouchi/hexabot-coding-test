import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.headline}>John Doe</h1>
        <p className={styles.subheading}>Freelance Web Developer</p>

        <p className={styles.description}>
          Crafting beautiful, responsive, and high-performance web applications.
          Specializing in React, TypeScript, and modern web technologies.
        </p>

        <div className={styles.ctaButtons}>
          <button className={styles.primaryBtn}>View My Work</button>
          <button className={styles.secondaryBtn}>Get In Touch</button>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span>Scroll to explore</span>
      </div>
    </section>
  )
}
