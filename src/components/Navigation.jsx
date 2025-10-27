import React, { useState, useEffect } from 'react';
import '../styles/Navigation.css';
import DevSig from '../assets/dev-doc-logo.svg';
import { Link, useLocation } from 'react-router-dom';
import Cart from './Cart';

const Navigation = () => {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  const navItemsArr = [
    {
      id: 1,
      label: "Home",
      icon: "house",
      path: "/"
    },
    {
      id: 2,
      label: "Info",
      icon: "info-square",
      path: "/info"
    },
    {
      id: 3,
      label: "Store",
      icon: "bag",
      path: "/store"
    },
    {
      id: 4,
      label: "Contact",
      icon: "telephone",
      path: "/contact"
    },
  ];

  // Close mobile menu when route changes
  useEffect(() => {
    setIsActive(false);
  }, [location.pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isActive && !event.target.closest('.Navbar') && !event.target.closest('.HamburgerMenu')) {
        setIsActive(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isActive]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isActive]);

  const toggleMenu = () => {
    setIsActive(prev => !prev);
  };

  const NavItem = ({ item }) => (
    <li className='transitioning NavItem' key={item.id}>
      <Link 
        to={item.path} 
        className={`NavLink ${location.pathname === item.path ? 'active' : ''}`}
      >
        <i className={`NavItemIcon bi bi-${item.icon}`} />
        <p className='NavItemLabel'>{item.label}</p>
      </Link>
    </li>
  );

  return (
    <header className="Header">
      <div className="HeaderContainer">
        <Link to="/" className="AppLogo">
          Chingu Asian Market
        </Link>
        
        <div className="HeaderActions">
          {/* Cart Component */}
          <div className="NavCart">
            <Cart />
          </div>
          
          <button 
            onClick={toggleMenu} 
            className={`HamburgerMenu ${isActive ? 'active' : ''}`}
            aria-label="Toggle navigation menu"
            aria-expanded={isActive}
          >
            <span className="HamLine transitioning"></span>
            <span className="HamLine transitioning"></span>
            <span className="HamLine transitioning"></span>
          </button>
        </div>

        <nav 
          className={`Navbar transitioning ${isActive ? 'active' : ''}`}
          aria-label="Main navigation"
        >
          <ul className="NavList transitioning">
            {navItemsArr.map(item => (
              <NavItem key={item.id} item={item} />
            ))}
          </ul>

          <hr className='breakline' />
          
          <div className='DevSig'>
            <p className='DevSigContent'>Developed By: </p>
            <a 
              target='_blank' 
              rel='noopener noreferrer'
              href='https://devdoc-rsa.vercel.app'
              aria-label="Visit developer website"
            >
              <img className='DevSigIcon' src={DevSig} alt='Developer Signature' />
            </a>
          </div>
        </nav>

        {/* Overlay for mobile */}
        {isActive && <div className="NavOverlay" onClick={() => setIsActive(false)} />}
      </div>
    </header>
  );
};

export default Navigation;