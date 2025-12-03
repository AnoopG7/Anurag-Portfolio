import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <p>&copy; 2025 Anurag. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#twitter" className="hover:text-slate-300">
              Twitter
            </a>
            <a href="#linkedin" className="hover:text-slate-300">
              LinkedIn
            </a>
            <a href="#github" className="hover:text-slate-300">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
