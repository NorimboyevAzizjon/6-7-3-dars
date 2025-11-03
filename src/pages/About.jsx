import React from 'react'
import styles from './About.module.css'

const About = () => {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.aboutHero}>
        <h1>👥 Biz Haqimizda</h1>
        <p>Oshpazlik sevgisi bilan birlashtirgan jamoa</p>
      </div>
      
      <div className={styles.aboutContent}>
        <div className={styles.aboutCard}>
          <div className={styles.aboutIcon}>🎯</div>
          <h2>Bizning Maqsad</h2>
          <p>Har bir kishi o'z uyida professional taomlar tayyorlashi mumkin degan ishonch bilan ishlaymiz</p>
        </div>
        
        <div className={styles.aboutCard}>
          <div className={styles.aboutIcon}>❤️</div>
          <h2>Bizning Qadriyatlar</h2>
          <p>Sifat, oddylik va yangilik - bu bizning asosiy tamoyillarimiz</p>
        </div>
        
        <div className={styles.aboutCard}>
          <div className={styles.aboutIcon}>🚀</div>
          <h2>Bizning Kelajag</h2>
          <p>Jahonning barcha oshxonalarini o'rganish va siz bilan baham ko'rish</p>
        </div>
      </div>
    </div>
  )
}

export default About