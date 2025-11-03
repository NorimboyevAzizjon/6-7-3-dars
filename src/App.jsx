import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import AboutDetail from './pages/AboutDetail'
import News from './pages/News'
import NewsDetail from './pages/NewsDetail'
import Blog from './pages/Blog'
import BlogDetail from './pages/BlogDetail'
import Products from './pages/Products'
import RecipeDetail from './pages/RecipeDetail'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="about/:aboutId" element={<AboutDetail />} />
          <Route path="news" element={<News />} />
          <Route path="news/:newsId" element={<NewsDetail />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:blogId" element={<BlogDetail />} />
          <Route path="products" element={<Products />} />
          <Route path="recipe/:recipeId" element={<RecipeDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App