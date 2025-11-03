import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import './Layout.css'

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      
      <main className="main-content">
        <Outlet />
      </main>
      
      <footer className="footer">
        <div className="footer-content">

          <p>Barcha retseptlar sinab ko'rilgan va ishonchli</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout