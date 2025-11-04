import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Calendar, User, Clock, TrendingUp, Star, Award } from 'lucide-react'
import styles from './News.module.css'

const News = () => {
  const newsArticles = [
    {
      id: 1,
      title: "Yangi Oshpazlik Trendlari 2024",
      excerpt: "2024 yilda oshpazlik sohasida kutilayotgan yangi trendlar va innovatsiyalar",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=250&fit=crop",
      author: "Oshpazlik Jurnali",
      date: "2024-01-18",
      readTime: "4 daqiqa",
      trending: true
    },
    {
      id: 2,
      title: "Sog'lom Ovqatlanish Bo'yicha Yangi Tadqiqot",
      excerpt: "Yangi tadqiqotlar sog'lom ovqatlanishning sog'liq uchun ahamiyatini tasdiqladi",
      image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=400&h=250&fit=crop",
      author: "Sog'liqni Saqlash Markazi",
      date: "2024-01-16",
      readTime: "6 daqiqa",
      featured: true
    },
    {
      id: 3,
      title: "Mahalliy Ingredientlar: Yangi Yo'nalish",
      excerpt: "Mahalliy ingredientlardan foydalanish oshpazlikda yangi yo'nalish bo'ldi",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=250&fit=crop",
      author: "Qishloq Xo'jaligi",
      date: "2024-01-14",
      readTime: "5 daqiqa"
    },
    {
      id: 4,
      title: "Vegan Oshxona: Tez O'sayotgan Bozor",
      excerpt: "Vegan taomlarga bo'lgan talab soni ortib bormoqda",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=250&fit=crop",
      author: "Bozor Tadqiqotlari",
      date: "2024-01-12",
      readTime: "3 daqiqa"
    }
  ];

  return (
    <div className={styles.newsPage}>
      <motion.section 
        className={styles.newsHero}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <h1>📰 Oshxona Yangiliklari</h1>
          <p>Oshpazlik dunyosidagi so'nggi yangiliklar, trendlar va tadqiqotlar</p>
        </div>
      </motion.section>

      <section className={styles.featuredSection}>
        <div className="container">
          <motion.div 
            className={styles.featuredGrid}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {newsArticles.slice(0, 2).map((article, index) => (
              <motion.article 
                key={article.id}
                className={`${styles.featuredCard} ${article.trending ? styles.trending : ''}`}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {article.trending && (
                  <div className={styles.trendingBadge}>
                    <TrendingUp size={16} />
                    Trend
                  </div>
                )}
                {article.featured && (
                  <div className={styles.featuredBadge}>
                    <Star size={16} />
                    Mashhur
                  </div>
                )}
                
                <img 
                  src={article.image} 
                  alt={article.title}
                  className={styles.articleImage}
                />
                
                <div className={styles.articleContent}>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  
                  <div className={styles.articleMeta}>
                    <div className={styles.metaItem}>
                      <User size={14} />
                      <span>{article.author}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <Calendar size={14} />
                      <span>{article.date}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <Clock size={14} />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <Link to={`/news/${article.id}`} className={styles.readMore}>
                    Batafsil o'qish →
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className={styles.newsGridSection}>
        <div className="container">
          <motion.h2 
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Barcha Yangiliklar
          </motion.h2>
          
          <div className={styles.newsGrid}>
            {newsArticles.map((article, index) => (
              <motion.article 
                key={article.id}
                className={styles.newsCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className={styles.cardImage}>
                  <img src={article.image} alt={article.title} />
                  {article.trending && (
                    <div className={styles.cardBadge}>
                      <TrendingUp size={12} />
                    </div>
                  )}
                </div>
                
                <div className={styles.cardContent}>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  
                  <div className={styles.cardMeta}>
                    <span className={styles.author}>{article.author}</span>
                    <span className={styles.date}>{article.date}</span>
                  </div>
                  
                  <Link to={`/news/${article.id}`} className={styles.readLink}>
                    O'qishni davom etish
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default News