import React from 'react';

interface Skill {
  icon: string;
  title: string;
  description: string;
}

const About: React.FC = () => {
  const skills: Skill[] = [
    {
      icon: '🎬',
      title: 'Creative Video Editing',
      description: 'Professional video editing with modern techniques',
    },
    {
      icon: '🎨',
      title: 'Graphic Design & Visual Branding',
      description: 'Creating stunning visual identities and designs',
    },
    {
      icon: '📱',
      title: 'Digital Marketing & Content Strategy',
      description: 'Strategic content creation for digital platforms',
    },
    {
      icon: '🎥',
      title: 'Motion Graphics & Visual Effects',
      description: 'Bringing motion and effects to life',
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container mx-auto px-4">
        <div className="about-content">
          {/* Left Side - Image Placeholder */}
          <div className="about-image-container">
            <div className="about-image-placeholder">
              <div className="image-decoration"></div>
              <img 
                src="/anurag.png" 
                alt="Anurag Pal" 
                loading="lazy"
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  borderRadius: '20px'
                }}
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="about-info">
            {/* About Me Section */}
            <div className="about-header mb-12">
              <h2 className="about-title">ABOUT ME</h2>
              <p className="about-description">
                I'm Anurag Pal, blending video editing and graphic design to create meaningful visuals
                and smooth storytelling. Explore my world of motion and design.
              </p>
            </div>

            <div className="about-grid">
              {/* Contact Section */}
              <div className="about-contact-section">
                <h3 className="section-heading">CONTACT</h3>
                <div className="contact-item">
                  <span className="contact-icon">👤</span>
                  <span className="contact-text">ANURAG PAL</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">🎂</span>
                  <span className="contact-text">09/03/2003</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span className="contact-text">NAVI MUMBAI, KHARGHAR</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <span className="contact-text">9144427980</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <span className="contact-text">work.by.anurag.pal@gmail.com</span>
                </div>
              </div>

              {/* Skills Section */}
              <div className="about-skills-section">
                <h3 className="section-heading">SKILLS</h3>
                <div className="skills-grid">
                  {skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <span className="skill-icon">{skill.icon}</span>
                      <h4 className="skill-title">{skill.title}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
