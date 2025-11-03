import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Products = () => {
  const [datas, setDatas] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    axios
      .get("https://dummyjson.com/recipes")
      .then((res) => {
        setDatas(res.data.recipes)
        setLoading(false)
      })
      .catch((err) => {
        console.log("Error", err)
        setError("Ma'lumotlarni yuklab bo'lmadi")
        setLoading(false)
      })
  }, [])

  if (loading) return <div className="loading">Yuklanmoqda...</div>
  if (error) return <div className="error">{error}</div>

  return (
    <div className="products-page">
      <h1>Barcha Retseptlar</h1>
      <div className="products-grid">
        {datas.map((item) => (
          <div key={item.id} className="product-card">
            <Link to={`/recipe/${item.id}`}>
              <img 
                src={item.image} 
                alt={item.name}
                className="product-image"
              />
              <div className="product-info">
                <h3>{item.name}</h3>
                <div className="product-meta">
                  <span>⏱ {item.prepTimeMinutes + item.cookTimeMinutes} min</span>
                  <span>👥 {item.servings}</span>
                  <span>⭐ {item.rating}</span>
                </div>
                <p className="cuisine">{item.cuisine}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products