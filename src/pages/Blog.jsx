import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Calendar, User, Clock, ArrowRight, BookOpen, ChefHat, Utensils } from 'lucide-react'
import styles from './Blog.module.css'

const Blog = () => {
  const blogPosts = [
    { 
      id: 1, 
      title: "Oshpazlik sirlari", 
      excerpt: "Professional oshpazlarning maxfiy texnikalari va ularni qanday o'zlashtirish kerak",
      author: "Ali Oshpaz",
      date: "2024-01-15",
      readTime: "5 daqiqa",
      icon: <ChefHat className={styles.postIcon} />,
      category: "Texnika"
    },
    { 
      id: 2, 
      title: "Ingredientlar haqida", 
      excerpt: "Eng yaxshi mahsulotlarni qanday tanlash kerak va ularni saqlash usullari",
      author: "Malika Qo'z",
      date: "2024-01-12",
      readTime: "7 daqiqa",
      icon: <Utensils className={styles.postIcon} />,
      category: "Maslahat"
    },
    { 
      id: 3, 
      title: "Pishirish usullari", 
      excerpt: "Turli pishirish usullari va ularning afzalliklari haqida to'liq qo'llanma",
      author: "Sardor Tabassum",
      date: "2024-01-10",
      readTime: "10 daqiqa",
      icon: <BookOpen className={styles.postIcon} />,
      category: "Qo'llanma"
    }
  ];

  return (
    <div className={styles.blogPage}>
      {/* Hero Section */}
      <motion.section 
        className={styles.blogHero}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <h1>📝 Oshpazlik Blogi</h1>
          <p>Eng so'nggi maslahatlar, yangiliklar va oshpazlik sirlari</p>
        </div>
      </motion.section>

      {/* Featured Posts */}
      <section className={styles.featuredSection}>
        <div className="container">
          <motion.h2 
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Mashhur Maqolalar
          </motion.h2>
          
          <div className={styles.blogGrid}>
            {blogPosts.map((post, index) => (
              <motion.article 
                key={post.id}
                className={styles.blogCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.postIconWrapper}>
                    {post.icon}
                  </div>
                  <span className={styles.category}>{post.category}</span>
                </div>
                
                <div className={styles.cardContent}>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  
                  <div className={styles.postMeta}>
                    <div className={styles.metaItem}>
                      <User size={16} />
                      <span>{post.author}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <Calendar size={16} />
                      <span>{post.date}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <Clock size={16} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
                
                <div className={styles.cardFooter}>
                  <Link to={`/blog/${post.id}`} className={styles.readMoreBtn}>
                    <span>Batafsil o'qish</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <motion.section 
        className={styles.newsletterSection}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <div className={styles.newsletterCard}>
            <div className={styles.newsletterContent}>
              <h3>📧 Yangiliklarga Obuna Bo'ling</h3>
              <p>Eng so'nggi retseptlar va oshpazlik maslahatlarini birinchi bo'lib oling</p>
            </div>
            <div className={styles.newsletterForm}>
              <input 
                type="email" 
                placeholder="Email manzilingiz"
                className={styles.emailInput}
              />
              <button className={styles.subscribeBtn}>
                Obuna bo'lish
              </button>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default Blog