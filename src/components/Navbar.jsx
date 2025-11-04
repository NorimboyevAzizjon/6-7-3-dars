import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Users, 
  FileText, 
  Newspaper, 
  ChefHat,
  Menu,
  X
} from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: <Home size={20} /> },
    { path: '/about', label: 'About', icon: <Users size={20} /> },
    { path: '/blog', label: 'Blog', icon: <FileText size={20} /> },
    { path: '/news', label: 'News', icon: <Newspaper size={20} /> },
    { path: '/products', label: 'Recipes', icon: <ChefHat size={20} /> }
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
            <ChefHat size={28} className={styles.logoIcon} />
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
        <button 
          className={styles.mobileMenuBtn}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

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