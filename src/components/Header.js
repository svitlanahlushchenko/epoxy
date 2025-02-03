import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  // Закриваємо меню при кліку за його межами
  useEffect(() => {
    const handleClickOutside = event => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className='navbar'>
      <Link to='/' className='navbar__logo'>
        <img src='/images/logo.png' alt='Logo' className='navbar__main-logo' />
        <p>Epoxidový svet</p>
      </Link>

      <div ref={menuRef}>
        <ul className={`navbar__menu ${isMenuOpen ? 'active' : ''}`}>
          <li className='navbar__link'>
            <Link to='/'>Hlavná stránka</Link>
          </li>
          <li className='navbar__link'>
            <Link to='/about'>O epoxide</Link>
          </li>
          <li className='navbar__link'>
            <Link to='/lessons'>Lekcie o živici </Link>
          </li>
          <li className='navbar__link'>
            <Link to='/materials'>Materiály na prácu</Link>
          </li>
          <li className='navbar__link'>
            <Link to='/finish'>Dokončenie a skladovanie</Link>
          </li>
        </ul>
      </div>

      {/* Кнопка з іконками ☰ / ✖ */}
      <button
        ref={buttonRef}
        className='navbar__toggle'
        onClick={toggleMenu}
        aria-label='Перемкнути меню'
      >
        {isMenuOpen ? '✖' : '☰'}
      </button>
    </nav>
  );
}

export default Header;
