import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            <span className={styles.titleGradient}>Oshpazlik</span>
            <span className={styles.titleAccent}> Sarguzashtlari</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Dunyo taomlarini o'z uyingizda pishiring - oddiy, tez va mazali!
          </p>
          <Link to="/products" className={styles.ctaButton}>
            <span className={styles.ctaIcon}>👨‍🍳</span>
            Retseptlarni Boshlash
          </Link>
        </div>
        <div className={styles.heroImage}>
          <div className={styles.floatingIcon}>🍕</div>
          <div className={styles.floatingIcon}>🍣</div>
          <div className={styles.floatingIcon}>🌮</div>
          <div className={styles.floatingIcon}>🍝</div>
        </div>
      </div>
      
      <div className={styles.featuresSection}>
        <h2 className={styles.featuresTitle}>Nima uchun bizni tanlaysiz?</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>⚡</div>
            <h3>Tez va Oson</h3>
            <p>30 daqiqadan kamroq vaqtda tayyor bo'ladigan taomlar</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🌍</div>
            <h3>Turli Madaniyatlar</h3>
            <p>Jahonning har bir burchagidan noyob taomlar</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>👨‍🍳</div>
            <h3>Boshlang'ichlar uchun</h3>
            <p>Batafsil ko'rsatmalar va professional maslahatlar</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home