import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="not-found-page">
      <h1>404 - Sahifa Topilmadi</h1>
      <p>Siz qidirgan sahifa mavjud emas.</p>
      <Link to="/" className="back-home">
        Bosh sahifaga qaytish
      </Link>
    </div>
  )
}

export default NotFound