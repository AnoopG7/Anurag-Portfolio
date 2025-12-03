import React from 'react';

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

const Portfolio: React.FC = () => {
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Professional video editing project',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Creative content creation',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'Motion graphics and effects',
      image: 'https://via.placeholder.com/300x200',
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">My Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
