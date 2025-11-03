import React from 'react'
import { useParams } from 'react-router-dom'

const NewsDetail = () => {
  const { newsId } = useParams()
  
  return (
    <div className="news-detail">
      <h1>News Article {newsId}</h1>
      <p>Bu yangilik maqolasining batafsil ko'rinishi</p>
    </div>
  )
}

export default NewsDetail