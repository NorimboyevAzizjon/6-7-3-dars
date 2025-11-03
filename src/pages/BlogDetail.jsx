import React from 'react'
import { useParams } from 'react-router-dom'

const BlogDetail = () => {
  const { blogId } = useParams()
  
  return (
    <div className="blog-detail">
      <h1>Blog Post {blogId}</h1>
      <p>Bu blog postning batafsil ko'rinishi</p>
    </div>
  )
}

export default BlogDetail