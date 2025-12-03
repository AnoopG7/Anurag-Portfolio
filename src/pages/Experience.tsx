import React from 'react';

interface Software {
  name: string;
  logo: string;
}

interface Job {
  company: string;
  position: string;
  duration: string;
  type: string;
}

const Experience: React.FC = () => {
  const softwareSkills: Software[] = [
    { name: 'DaVinci Resolve', logo: 'https://cdn.simpleicons.org/davinciresolve' },
    { name: 'Wonder Share Filmora', logo: 'https://cdn.simpleicons.org/filmora' },
    { name: 'Canva', logo: 'https://cdn.simpleicons.org/canva' },
    { name: 'CapCut', logo: 'https://cdn.simpleicons.org/capcut' },
    { name: 'Adobe Premiere Pro', logo: 'https://cdn.simpleicons.org/adobepremierepro' },
    { name: 'After Effects', logo: 'https://cdn.simpleicons.org/adobeaftereffects' },
  ];

  const workExperience: Job[] = [
    {
      company: 'DYO CHIEF',
      position: 'INTERNSHIP',
      duration: '2024 (4 Months)',
      type: 'internship',
    },
    {
      company: 'PIXELLUKA',
      position: 'Full time',
      duration: '2024-25 (7 Months)',
      type: 'fulltime',
    },
    {
      company: 'KHILONAMART',
      position: 'Full time',
      duration: '2024-25 (7 Months)',
      type: 'fulltime',
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container mx-auto px-4">
        {/* Software Section */}
        <div className="software-container">
          <h2 className="section-title">SOFTWARE</h2>
          <div className="software-grid">
            {softwareSkills.map((software, index) => (
              <div key={index} className="software-item">
                <div className="software-logo">
                  <img src={software.logo} alt={software.name} onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/80?text=' + software.name.split(' ')[0];
                  }} />
                </div>
                <p className="software-name">{software.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Timeline Section */}
        <div className="timeline-container">
          <h2 className="section-title">EXPERIENCE</h2>
          <div className="timeline">
            {workExperience.map((job, index) => (
              <div key={index} className={`timeline-item ${job.type}`}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3 className="job-company">{job.company}</h3>
                  <p className="job-position">{job.position}</p>
                  <p className="job-duration">{job.duration}</p>
                </div>
              </div>
            ))}
            <div className="timeline-line"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
