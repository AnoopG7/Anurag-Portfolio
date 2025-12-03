import React from 'react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="bg-slate-900 text-white py-4">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold">{title}</h1>
      </div>
    </header>
  );
};

export default Header;
