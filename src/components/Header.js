import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

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
    <nav className='navbar '>
      <Link to='/' className='navbar__logo'>
        <img src='/images/logo.png' alt='Logo' className='navbar__main-logo' />
        <p className='navbar__logo-text'>Epoxidový svet</p>
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
            <Link to='/galery'>Galéria</Link>
          </li>
        </ul>
      </div>

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
