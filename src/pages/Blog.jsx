import React from 'react'
import styles from './Blog.module.css'

const Blog = () => {
  const blogPosts = [
    { 
      id: 1, 
      title: "Oshpazlik sirlari", 
      icon: "🔍", 
      excerpt: "Professional oshpazlarning maxfiy texnikalari va ularni qanday o'zlashtirish kerak" 
    },
    { 
      id: 2, 
      title: "Ingredientlar haqida", 
      icon: "🥬", 
      excerpt: "Eng yaxshi mahsulotlarni qanday tanlash kerak va ularni saqlash usullari" 
    },
    { 
      id: 3, 
      title: "Pishirish usullari", 
      icon: "🔥", 
      excerpt: "Turli pishirish usullari va ularning afzalliklari haqida to'liq qo'llanma" 
    }
  ];

  return (
    <div className={styles.blogPage}>
      <div className={styles.blogHero}>
        <h1>📝 Oshpazlik Blogi</h1>
        <p>Eng so'nggi maslahatlar, yangiliklar va oshpazlik sirlari</p>
      </div>
      
      <div className={styles.blogGrid}>
        {blogPosts.map(post => (
          <div key={post.id} className={styles.blogCard}>
            <div className={styles.blogIcon}>{post.icon}</div>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <button className={styles.readMoreBtn}>Batafsil o'qish ➔</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog