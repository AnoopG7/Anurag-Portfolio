import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className="bg-slate-800 text-white py-3 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Anurag</div>
        <ul className="flex gap-6">
          <li>
            <a href="#home" className="hover:text-slate-300">
              Home
            </a>
          </li>
          <li>
            <a href="#portfolio" className="hover:text-slate-300">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-slate-300">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-slate-300">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
