import React from 'react'
import { useParams } from 'react-router-dom'

const AboutDetail = () => {
  const { aboutId } = useParams()
  
  return (
    <div className="about-detail">
      <h1>About Detail {aboutId}</h1>
      <p>Bu about sahifasining batafsil ko'rinishi</p>
    </div>
  )
}

export default AboutDetail