import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { label: 'Home', path: '#home' },
    { label: 'Projects', path: '#projects' },
    { label: 'Services', path: '#services' },
    { label: 'About', path: '#about' },
    { label: 'Contact', path: '#contact' },
  ];

  const handleNavClick = (path: string) => {
    setIsMenuOpen(false);
    const targetId = path.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navigation sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="nav-brand" onClick={(e) => {
          e.preventDefault();
          handleNavClick('#home');
        }}>
          Anurag
        </a>
        <div className="mobile-menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          {menuItems.map((item) => (
            <li key={item.path}>
              <a
                href={item.path}
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.path);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
