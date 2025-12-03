import React from 'react';

interface ServiceItem {
  number: string;
  title: string;
  description: string;
}

interface ServiceCategory {
  title: string;
  icon: string;
  services: ServiceItem[];
}

const Services: React.FC = () => {
  const serviceCategories: ServiceCategory[] = [
    {
      title: 'Graphic Design',
      icon: '🎨',
      services: [
        {
          number: '1',
          title: 'Posts, Posters, Insta Carousel, Banners',
          description: 'Social media content creation and promotional materials',
        },
        {
          number: '2',
          title: 'Company Profile Design',
          description: 'Professional company branding and documentation',
        },
        {
          number: '3',
          title: 'Branding, Packaging Design',
          description: 'Complete brand identity and product packaging solutions',
        },
      ],
    },
    {
      title: 'Video Editing',
      icon: '🎬',
      services: [
        {
          number: '1',
          title: 'Long-Form Editing',
          description: 'Documentary, Vlogs, Weddings, Ads, Educational content',
        },
        {
          number: '2',
          title: 'Reel Editing',
          description: 'Talking Head, Documentary, Motion Editing, UGC, Trending reels',
        },
      ],
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="container mx-auto px-4">
        <h2 className="services-title">TABLE OF CONTENT</h2>

        <div className="services-grid">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="service-category">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-title">{category.title}</h3>
              </div>

              <div className="services-list">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="service-item">
                    <div className="service-number">{service.number}</div>
                    <div className="service-content">
                      <h4 className="service-item-title">{service.title}</h4>
                      <p className="service-item-description">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
