import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/about', label: 'About', icon: '👥' },
    { path: '/blog', label: 'Blog', icon: '📝' },
    { path: '/news', label: 'News', icon: '📰' },
    { path: '/products', label: 'Recipes', icon: '🍳' }
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        {/* Logo */}
        <div className={styles.navLogo}>
          <Link to="/" className={styles.logoLink}>
            <span className={styles.logoIcon}>👨‍🍳</span>
            <span className={styles.logoText}>TasteMaster</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className={styles.navMenu}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`${styles.navLink} ${isActive(item.path) ? styles.active : ''}`}
            >
              <span className={styles.navIcon}>{item.icon}</span>
              <span className={styles.navLabel}>{item.label}</span>
              {isActive(item.path) && <div className={styles.activeIndicator}></div>}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div 
          className={`${styles.mobileMenuBtn} ${isMenuOpen ? styles.open : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Mobile Navigation */}
        <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`${styles.mobileNavLink} ${isActive(item.path) ? styles.active : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className={styles.navIcon}>{item.icon}</span>
              <span className={styles.navLabel}>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;