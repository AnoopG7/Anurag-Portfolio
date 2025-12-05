import React from 'react';

interface EducationEntry {
  degree: string;
  field: string;
  institution: string;
  year: string;
  status: string;
}

const Education: React.FC = () => {
  const educationData: EducationEntry[] = [
    {
      degree: "Bachelor's Degree",
      field: 'Multimedia & Animation',
      institution: 'VISHWAKARMA UNIVERSITY',
      year: '2022 - 2025',
      status: 'Pursuing',
    },
    {
      degree: 'Diploma',
      field: 'Graphic Design & Video Production',
      institution: 'VIDYAKUL ACADEMY',
      year: '2023 - 2024',
      status: 'Completed',
    },
    {
      degree: 'Certification',
      field: 'Professional Video Editing',
      institution: 'CREATIVE ACADEMY',
      year: '2022 - 2023',
      status: 'Completed',
    },
  ];

  return (
    <section id="education" className="education-section">
      <div className="container mx-auto px-4">
        <h2 className="section-title">EDUCATION</h2>
        <div className="education-grid">
          {educationData.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-card-header">
                <div className="education-icon">🎓</div>
                <div className="education-badge">{edu.status}</div>
              </div>
              <div className="education-content">
                <h3 className="degree">{edu.degree}</h3>
                <p className="field">{edu.field}</p>
                <p className="institution">{edu.institution}</p>
                <p className="year">{edu.year}</p>
              </div>

              <div className="education-accent"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
