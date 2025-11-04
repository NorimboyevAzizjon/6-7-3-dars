import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import axios from 'axios'
import { Clock, Users, Star, Search, Filter, ChefHat } from 'lucide-react'
import LoadingSpinner from '../components/LoadingSpinner'
import styles from './Products.module.css'

const Products = () => {
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterCuisine, setFilterCuisine] = useState('')

  useEffect(() => {
    axios
      .get("https://dummyjson.com/recipes")
      .then((res) => {
        setRecipes(res.data.recipes)
        setLoading(false)
      })
      .catch((err) => {
        console.log("Error", err)
        setError("Ma'lumotlarni yuklab bo'lmadi")
        setLoading(false)
      })
  }, [])


  const uniqueCuisines = [...new Set(recipes.map(recipe => recipe.cuisine))]


  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recipe.cuisine.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCuisine = !filterCuisine || recipe.cuisine === filterCuisine
    return matchesSearch && matchesCuisine
  })

  if (loading) return <LoadingSpinner />
  if (error) return <div className={styles.error}>{error}</div>

  return (
    <div className={styles.productsPage}>
    
      <motion.section 
        className={styles.productsHero}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <h1>🍽️ Barcha Retseptlar</h1>
          <p>Dunyo oshxonalarining eng mazali taomlari</p>
        </div>
      </motion.section>

      
      <section className={styles.filtersSection}>
        <div className="container">
          <motion.div 
            className={styles.filtersContainer}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.searchBox}>
              <Search className={styles.searchIcon} />
              <input 
                type="text"
                placeholder="Retsept yoki milliy oshxona qidirish..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.searchInput}
              />
            </div>
            
            <div className={styles.filterBox}>
              <Filter className={styles.filterIcon} />
              <select 
                value={filterCuisine}
                onChange={(e) => setFilterCuisine(e.target.value)}
                className={styles.filterSelect}
              >
                <option value="">Barcha Oshxonalar</option>
                {uniqueCuisines.map(cuisine => (
                  <option key={cuisine} value={cuisine}>{cuisine}</option>
                ))}
              </select>
            </div>
          </motion.div>
        </div>
      </section>

    
      <section className={styles.recipesSection}>
        <div className="container">
          <motion.div 
            className={styles.recipesHeader}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.sectionTitle}>
              <ChefHat className={styles.titleIcon} />
              {filteredRecipes.length} ta Retsept Topildi
            </h2>
          </motion.div>

          <div className={styles.recipesGrid}>
            {filteredRecipes.map((recipe, index) => (
              <motion.div 
                key={recipe.id}
                className={styles.recipeCard}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Link to={`/recipe/${recipe.id}`} className={styles.cardLink}>
                  <div className={styles.cardImage}>
                    <img 
                      src={recipe.image} 
                      alt={recipe.name}
                      className={styles.recipeImage}
                    />
                    <div className={styles.imageOverlay}>
                      <span className={styles.viewRecipe}>Retseptni Ko'rish</span>
                    </div>
                    <div className={styles.difficultyBadge}>
                      {recipe.difficulty}
                    </div>
                  </div>
                  
                  <div className={styles.cardContent}>
                    <h3 className={styles.recipeName}>{recipe.name}</h3>
                    <p className={styles.recipeCuisine}>{recipe.cuisine}</p>
                    
                    <div className={styles.recipeMeta}>
                      <div className={styles.metaItem}>
                        <Clock size={16} />
                        <span>{recipe.prepTimeMinutes + recipe.cookTimeMinutes} min</span>
                      </div>
                      <div className={styles.metaItem}>
                        <Users size={16} />
                        <span>{recipe.servings} kishi</span>
                      </div>
                      <div className={styles.metaItem}>
                        <Star size={16} />
                        <span>{recipe.rating}</span>
                      </div>
                    </div>
                    
                    <div className={styles.recipeTags}>
                      {recipe.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span key={tagIndex} className={styles.tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredRecipes.length === 0 && (
            <motion.div 
              className={styles.noResults}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p>Hech qanday retsept topilmadi. Boshqa so'z yoki filter bilan urinib ko'ring.</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Products