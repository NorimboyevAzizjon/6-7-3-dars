import React from 'react'
import { Loader } from 'lucide-react'
import styles from './LoadingSpinner.module.css'

const LoadingSpinner = ({ size = 40, color = '#667eea' }) => {
  return (
    <div className={styles.spinnerContainer}>
      <Loader 
        size={size} 
        color={color} 
        className={styles.spinner}
      />
    </div>
  )
}

export default LoadingSpinner