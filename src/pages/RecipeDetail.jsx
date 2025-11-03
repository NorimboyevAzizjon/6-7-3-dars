import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import styles from './RecipeDetail.module.css'

const RecipeDetail = () => {
  const { recipeId } = useParams()
  const [recipe, setRecipe] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setLoading(true)
        const response = await axios.get(`https://dummyjson.com/recipes/${recipeId}`)
        setRecipe(response.data)
        setError(null)
      } catch (err) {
        console.error("Xatolik:", err)
        setError("Retseptni yuklab bo'lmadi. Iltimos, qaytadan urinib ko'ring.")
      } finally {
        setLoading(false)
      }
    }

    if (recipeId) {
      fetchRecipe()
    }
  }, [recipeId])

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loading}>Retsept yuklanmoqda... 🍳</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <div className={styles.error}>{error}</div>
        <Link to="/products" className={styles.backLink}>← Retseptlar ro'yxatiga qaytish</Link>
      </div>
    )
  }

  if (!recipe) {
    return (
      <div className={styles.notFoundContainer}>
        <div className={styles.notFound}>Retsept topilmadi. 😔</div>
        <Link to="/products" className={styles.backLink}>← Retseptlar ro'yxatiga qaytish</Link>
      </div>
    )
  }

  return (
    <div className={styles.recipeDetail}>
      <Link to="/products" className={styles.backLink}>← Barcha retseptlar</Link>
      
      <div className={styles.recipeHeader}>
        <h1>{recipe.name}</h1>
        <img src={recipe.image} alt={recipe.name} className={styles.recipeImage} />
      </div>
      
      <div className={styles.recipeMetaGrid}>
        <div className={styles.metaItem}>
          <span className={styles.label}>Tayyorlash vaqti:</span>
          <span className={styles.value}>{recipe.prepTimeMinutes} daqiqa</span>
        </div>
        <div className={styles.metaItem}>
          <span className={styles.label}>Pishirish vaqti:</span>
          <span className={styles.value}>{recipe.cookTimeMinutes} daqiqa</span>
        </div>
        <div className={styles.metaItem}>
          <span className={styles.label}>Portsiya:</span>
          <span className={styles.value}>{recipe.servings} kishi</span>
        </div>
        <div className={styles.metaItem}>
          <span className={styles.label}>Murakkablik:</span>
          <span className={styles.value}>{recipe.difficulty}</span>
        </div>
        <div className={styles.metaItem}>
          <span className={styles.label}>Milliy oshxona:</span>
          <span className={styles.value}>{recipe.cuisine}</span>
        </div>
        <div className={styles.metaItem}>
          <span className={styles.label}>Reyting:</span>
          <span className={styles.value}>⭐ {recipe.rating}/5</span>
        </div>
      </div>

      <div className={styles.recipeContent}>
        <div className={styles.ingredientsSection}>
          <h2>🛒 Kerakli Mahsulotlar</h2>
          <ul className={styles.ingredientsList}>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        <div className={styles.instructionsSection}>
          <h2>👨‍🍳 Tayyorlash Usuli</h2>
          <ol className={styles.instructionsList}>
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>
      </div>

      {recipe.tags && recipe.tags.length > 0 && (
        <div className={styles.recipeTags}>
          <h3>🏷 Teglar</h3>
          <div className={styles.tagsList}>
            {recipe.tags.map((tag, index) => (
              <span key={index} className={styles.tag}>{tag}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default RecipeDetail