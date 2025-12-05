import React, { useState, useEffect } from 'react';

interface Project {
  id: number;
  number: string;
  title: string;
  company: string;
  videos?: string[];
}

const Projects: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState<Set<string>>(new Set());

  const projects: Project[] = [
    {
      id: 1,
      number: 'PROJECT 1',
      title: 'Wings',
      company: 'Under pixelluka',
      videos: [
        '/videos/project1-1.mp4',
        '/videos/project1-2.mp4',
        '/videos/project1-3.mp4',
      ],
    },
    {
      id: 2,
      number: 'PROJECT 2',
      title: 'Event Coverage',
      company: 'DYO Chief',
      videos: [
        '/videos/project2-1.mp4',
        '/videos/project2-2.mp4',
        '/videos/project2-3.mp4',
      ],
    },
    {
      id: 3,
      number: 'PROJECT 3',
      title: 'Brand Story',
      company: 'Khilonamart',
      videos: [
        '/videos/project3-1.mp4',
        '/videos/project3-2.mp4',
        '/videos/project3-3.mp4',
      ],
    },
  ];

  // Preload videos in the background
  useEffect(() => {
    const preloadVideo = (videoUrl: string) => {
      if (loadedVideos.has(videoUrl)) return;
      
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'video';
      link.href = videoUrl;
      document.head.appendChild(link);
      
      setLoadedVideos(prev => new Set([...prev, videoUrl]));
    };

    // Preload current and next slide videos
    const currentProject = projects[currentSlide];
    const nextProject = projects[(currentSlide + 1) % projects.length];
    
    if (currentProject?.videos) {
      currentProject.videos.forEach(preloadVideo);
    }
    
    if (nextProject?.videos) {
      nextProject.videos.forEach(preloadVideo);
    }
  }, [currentSlide, projects, loadedVideos]);

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
                      {project.videos?.[0] ? (
                        <video
                          className="video-placeholder"
                          preload="metadata"
                          muted
                          playsInline
                          controls
                        >
                          <source src={project.videos[0]} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        <div className="video-placeholder">
                          <span className="video-icon">🎬</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Center Phone */}
                  <div className="mobile-frame center">
                    <div className="phone-body">
                      <div className="phone-notch"></div>
                      {project.videos?.[1] ? (
                        <video
                          className="video-placeholder"
                          preload="metadata"
                          muted
                          playsInline
                          controls
                        >
                          <source src={project.videos[1]} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        <div className="video-placeholder">
                          <span className="video-icon">🎬</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right Phone */}
                  <div className="mobile-frame right">
                    <div className="phone-body">
                      <div className="phone-notch"></div>
                      {project.videos?.[2] ? (
                        <video
                          className="video-placeholder"
                          preload="metadata"
                          muted
                          playsInline
                          controls
                        >
                          <source src={project.videos[2]} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        <div className="video-placeholder">
                          <span className="video-icon">🎬</span>
                        </div>
                      )}
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
