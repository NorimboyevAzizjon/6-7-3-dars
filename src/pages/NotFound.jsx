import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, ChefHat, ArrowLeft } from 'lucide-react'
import styles from './NotFound.module.css'

const NotFound = () => {
  return (
    <div className={styles.notFoundPage}>
      <div className="container">
        <motion.div 
          className={styles.notFoundContent}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className={styles.errorIcon}
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, -5, 5, -5, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <ChefHat size={80} />
          </motion.div>
          
          <h1 className={styles.errorCode}>404</h1>
          <h2 className={styles.errorTitle}>Sahifa Topilmadi</h2>
          <p className={styles.errorMessage}>
            Kechirasiz, siz qidirgan sahifa mavjud emas yoki o'chirilgan bo'lishi mumkin.
          </p>
          
          <motion.div 
            className={styles.actionButtons}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link to="/" className={styles.primaryButton}>
              <Home size={18} />
              Bosh Sahifaga Qaytish
            </Link>
            
            <Link to="/products" className={styles.secondaryButton}>
              <ArrowLeft size={18} />
              Retseptlar Sahifasi
            </Link>
          </motion.div>
          
          <motion.div 
            className={styles.floatingFoods}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <span className={styles.floatingItem}>🍕</span>
            <span className={styles.floatingItem}>🍣</span>
            <span className={styles.floatingItem}>🌮</span>
            <span className={styles.floatingItem}>🍝</span>
            <span className={styles.floatingItem}>🍔</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default NotFound