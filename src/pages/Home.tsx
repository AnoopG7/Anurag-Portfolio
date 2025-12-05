import React from 'react';

const Home: React.FC = () => {
  const handleScrollTo = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="hero relative overflow-hidden"
    >
      {/* Camera Icons - Left */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 z-10 hidden lg:block animate-float">
        <div className="camera-icon">
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Camera body */}
            <circle cx="60" cy="70" r="35" fill="black" stroke="black" strokeWidth="2" />
            {/* Lens */}
            <circle cx="60" cy="70" r="20" fill="none" stroke="black" strokeWidth="3" />
            {/* Inner lens */}
            <circle cx="60" cy="70" r="12" fill="#333" />
            {/* Shutter indication */}
            <circle cx="60" cy="70" r="8" fill="#555" opacity="0.6" />
            {/* Tripod legs */}
            <line x1="45" y1="100" x2="30" y2="115" stroke="black" strokeWidth="4" />
            <line x1="60" y1="105" x2="60" y2="120" stroke="black" strokeWidth="4" />
            <line x1="75" y1="100" x2="90" y2="115" stroke="black" strokeWidth="4" />
            {/* Tripod connectors */}
            <circle cx="45" cy="100" r="4" fill="black" />
            <circle cx="60" cy="105" r="4" fill="black" />
            <circle cx="75" cy="100" r="4" fill="black" />
          </svg>
        </div>
      </div>

      {/* Camera Icons - Right */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-10 hidden lg:block animate-float" style={{ animationDelay: '0.5s' }}>
        <div className="camera-icon">
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Camera body */}
            <circle cx="60" cy="70" r="35" fill="black" stroke="black" strokeWidth="2" />
            {/* Lens */}
            <circle cx="60" cy="70" r="20" fill="none" stroke="black" strokeWidth="3" />
            {/* Inner lens */}
            <circle cx="60" cy="70" r="12" fill="#333" />
            {/* Shutter indication */}
            <circle cx="60" cy="70" r="8" fill="#555" opacity="0.6" />
            {/* Tripod legs */}
            <line x1="45" y1="100" x2="30" y2="115" stroke="black" strokeWidth="4" />
            <line x1="60" y1="105" x2="60" y2="120" stroke="black" strokeWidth="4" />
            <line x1="75" y1="100" x2="90" y2="115" stroke="black" strokeWidth="4" />
            {/* Tripod connectors */}
            <circle cx="45" cy="100" r="4" fill="black" />
            <circle cx="60" cy="105" r="4" fill="black" />
            <circle cx="75" cy="100" r="4" fill="black" />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="hero-content container mx-auto px-4 relative z-20">
        {/* Main Heading */}
        <div className="mb-8 animate-slide-up">
          <h1 className="hero-title">
            <span className="block text-white drop-shadow-lg">ANURAG</span>
            <span className="gradient text-5xl md:text-6xl lg:text-7xl font-black italic">PORTFOLIO</span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="hero-subtitle animate-slide-up animate-stagger-2">
          Professional Video Editing & Visual Storytelling
        </p>

        {/* CTA Buttons */}
        <div className="hero-cta animate-slide-up animate-stagger-3">
          <button 
            className="hero-btn hero-btn-primary"
            onClick={() => handleScrollTo('projects')}
          >
            View My Work
          </button>
          <button 
            className="hero-btn hero-btn-secondary"
            onClick={() => handleScrollTo('contact')}
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Background Blur Circles */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse" />
    </section>
  );
};

export default Home;
