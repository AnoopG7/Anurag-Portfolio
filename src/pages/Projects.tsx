import React, { useState, useEffect } from 'react';

interface Project {
  id: number;
  number: string;
  title: string;
  company: string;
}

const Projects: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const projects: Project[] = [
    {
      id: 1,
      number: 'PROJECT 1',
      title: 'Wings',
      company: 'Under pixelluka',
    },
    {
      id: 2,
      number: 'PROJECT 2',
      title: 'Event Coverage',
      company: 'DYO Chief',
    },
    {
      id: 3,
      number: 'PROJECT 3',
      title: 'Brand Story',
      company: 'Khilonamart',
    },
  ];

  // Auto-play carousel
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [autoPlay, projects.length]);

  const handlePrevious = () => {
    setAutoPlay(false);
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleNext = () => {
    setAutoPlay(false);
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const goToSlide = (index: number) => {
    setAutoPlay(false);
    setCurrentSlide(index);
  };

  const handleMouseEnter = () => {
    setAutoPlay(false);
  };

  const handleMouseLeave = () => {
    setAutoPlay(true);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container mx-auto px-4">
        {/* Carousel Container */}
        <div
          className="carousel-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Slides */}
          <div className="carousel-wrapper">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
              >
                {/* Project Info */}
                <div className="project-info">
                  <h2 className="project-number">{project.number}</h2>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-company">{project.company}</p>
                </div>

                {/* Mobile Frame with Video Placeholder */}
                <div className="mobile-frames-container">
                  {/* Left Phone */}
                  <div className="mobile-frame left">
                    <div className="phone-body">
                      <div className="phone-notch"></div>
                      <div className="video-placeholder">
                        <span className="video-icon">🎬</span>
                      </div>
                    </div>
                  </div>

                  {/* Center Phone */}
                  <div className="mobile-frame center">
                    <div className="phone-body">
                      <div className="phone-notch"></div>
                      <div className="video-placeholder">
                        <span className="video-icon">🎬</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Phone */}
                  <div className="mobile-frame right">
                    <div className="phone-body">
                      <div className="phone-notch"></div>
                      <div className="video-placeholder">
                        <span className="video-icon">🎬</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button className="carousel-arrow prev" onClick={handlePrevious}>
            ‹
          </button>
          <button className="carousel-arrow next" onClick={handleNext}>
            ›
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="carousel-indicators">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
