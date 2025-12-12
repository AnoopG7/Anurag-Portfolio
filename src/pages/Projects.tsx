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
      title: 'B Creamy Jane',
      company: 'Pixelluka',
      videos: [
        'https://drive.google.com/file/d/1ibHfMFPffr-bavmxfXFKVnIrMYElSkfm/preview',
      ],
    },
    {
      id: 2,
      number: 'PROJECT 2',
      title: 'Turf',
      company: 'Sports Facility',
      videos: [
        'https://drive.google.com/file/d/1e7NLj9uq0BKzcxz1P8G8QBhuW5IJ3j8u/preview',
      ],
    },
    {
      id: 3,
      number: 'PROJECT 3',
      title: 'Khilona Mart',
      company: 'E-commerce',
      videos: [
        'https://drive.google.com/file/d/1hsKuwJYyYp47DBMWECVH1ZxU9Yp2ckgL/preview',
      ],
    },
    {
      id: 4,
      number: 'PROJECT 4',
      title: 'Gym',
      company: 'Fitness Center',
      videos: [
        'https://drive.google.com/file/d/1CsUJn9ehg9xXDOxZGXEnpegn4spD5YfS/preview',
      ],
    },
    {
      id: 5,
      number: 'PROJECT 5',
      title: 'NGO',
      company: 'Social Cause',
      videos: [
        'https://drive.google.com/file/d/1ganbGKqy4ELqT2yHipu7C9gbFU2TmfFj/preview',
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

  // Get the indices for previous, current, and next slides (circular)
  const getPrevIndex = () => (currentSlide - 1 + projects.length) % projects.length;
  const getNextIndex = () => (currentSlide + 1) % projects.length;

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
            <div className="carousel-slide active">
              {/* Project Info - Current Project */}
              <div className="project-info">
                <h2 className="project-number">{projects[currentSlide].number}</h2>
                <h3 className="project-title">{projects[currentSlide].title}</h3>
                <p className="project-company">{projects[currentSlide].company}</p>
              </div>

              {/* Mobile Frame with Video - Circular Display */}
              <div className="mobile-frames-container">
                {/* Left Phone - Previous Project */}
                <div className="mobile-frame left">
                  <div className="phone-body">
                    <div className="phone-notch"></div>
                    {projects[getPrevIndex()].videos?.[0] ? (
                      projects[getPrevIndex()].videos[0].includes('drive.google.com') ? (
                        <iframe
                          src={projects[getPrevIndex()].videos[0]}
                          className="video-placeholder"
                          allow="autoplay"
                          style={{ border: 'none', width: '100%', height: '100%' }}
                        />
                      ) : (
                        <video
                          className="video-placeholder"
                          preload="metadata"
                          muted
                          playsInline
                          controls
                        >
                          <source src={projects[getPrevIndex()].videos[0]} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      )
                    ) : (
                      <div className="video-placeholder">
                        <span className="video-icon">🎬</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Center Phone - Current Project */}
                <div className="mobile-frame center">
                  <div className="phone-body">
                    <div className="phone-notch"></div>
                    {projects[currentSlide].videos?.[0] ? (
                      projects[currentSlide].videos[0].includes('drive.google.com') ? (
                        <iframe
                          src={projects[currentSlide].videos[0]}
                          className="video-placeholder"
                          allow="autoplay"
                          style={{ border: 'none', width: '100%', height: '100%' }}
                        />
                      ) : (
                        <video
                          className="video-placeholder"
                          preload="metadata"
                          muted
                          playsInline
                          controls
                        >
                          <source src={projects[currentSlide].videos[0]} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      )
                    ) : (
                      <div className="video-placeholder">
                        <span className="video-icon">🎬</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Phone - Next Project */}
                <div className="mobile-frame right">
                  <div className="phone-body">
                    <div className="phone-notch"></div>
                    {projects[getNextIndex()].videos?.[0] ? (
                      projects[getNextIndex()].videos[0].includes('drive.google.com') ? (
                        <iframe
                          src={projects[getNextIndex()].videos[0]}
                          className="video-placeholder"
                          allow="autoplay"
                          style={{ border: 'none', width: '100%', height: '100%' }}
                        />
                      ) : (
                        <video
                          className="video-placeholder"
                          preload="metadata"
                          muted
                          playsInline
                          controls
                        >
                          <source src={projects[getNextIndex()].videos[0]} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      )
                    ) : (
                      <div className="video-placeholder">
                        <span className="video-icon">🎬</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
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
