import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Clock, Globe, Users, ArrowRight, Play } from 'lucide-react'
import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <motion.h1 
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className={styles.titleGradient}>Oshpazlik</span>
            <span className={styles.titleAccent}> Sarguzashtlari</span>
          </motion.h1>
          
          <motion.p 
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Dunyo taomlarini o'z uyingizda pishiring - oddiy, tez va mazali!
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={styles.ctaButtons}
          >
            <Link to="/products" className={styles.ctaButtonPrimary}>
              <Play size={20} />
              Retseptlarni Boshlash
              <ArrowRight size={16} />
            </Link>
            <button className={styles.ctaButtonSecondary}>
              Video Ko'rsatmalar
            </button>
          </motion.div>
        </div>
        
        <div className={styles.heroImage}>
          <motion.div 
            className={styles.floatingCard}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=500&fit=crop" 
              alt="Delicious food"
              className={styles.heroImg}
            />
            <div className={styles.cardBadge}>
              <span>🍕 Popular</span>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className="container">
          <motion.h2 
            className={styles.featuresTitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Nima uchun bizni tanlaysiz?
          </motion.h2>
          
          <div className={styles.featuresGrid}>
            <motion.div 
              className={styles.featureCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className={styles.featureIcon}>
                <Clock className={styles.icon} />
              </div>
              <h3>Tez va Oson</h3>
              <p>30 daqiqadan kamroq vaqtda tayyor bo'ladigan taomlar</p>
            </motion.div>
            
            <motion.div 
              className={styles.featureCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className={styles.featureIcon}>
                <Globe className={styles.icon} />
              </div>
              <h3>Turli Madaniyatlar</h3>
              <p>Jahonning har bir burchagidan noyob taomlar</p>
            </motion.div>
            
            <motion.div 
              className={styles.featureCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className={styles.featureIcon}>
                <Users className={styles.icon} />
              </div>
              <h3>Boshlang'ichlar uchun</h3>
              <p>Batafsil ko'rsatmalar va professional maslahatlar</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            <motion.div 
              className={styles.statItem}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className={styles.statNumber}>500+</div>
              <div className={styles.statLabel}>Retseptlar</div>
            </motion.div>
            
            <motion.div 
              className={styles.statItem}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className={styles.statNumber}>50+</div>
              <div className={styles.statLabel}>Milliy Oshxonalar</div>
            </motion.div>
            
            <motion.div 
              className={styles.statItem}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className={styles.statNumber}>10K+</div>
              <div className={styles.statLabel}>Foydalanuvchilar</div>
            </motion.div>
            
            <motion.div 
              className={styles.statItem}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className={styles.statNumber}>4.8</div>
              <div className={styles.statLabel}>Reyting</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home