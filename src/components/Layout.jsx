import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import './Layout.css'

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      
      <main className="main-content">
        <div className="container">
          <Outlet />
        </div>
      </main>
      
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-grid">
            <div className="footer-section">
              <h3>👨‍🍳 TasteMaster</h3>
              <p>Dunyo taomlari sizning oshxonangizda</p>
            </div>
            <div className="footer-section">
              <h4>Tez Havolalar</h4>
              <a href="/products">Retseptlar</a>
              <a href="/blog">Blog</a>
              <a href="/about">Biz Haqimizda</a>
            </div>
            <div className="footer-section">
              <h4>Aloqa</h4>
              <p>📧 info@tastemaster.uz</p>
              <p>📞 +998 90 123 45 67</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 TasteMaster</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout