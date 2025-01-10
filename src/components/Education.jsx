import React from 'react';
import HistoryCard from './HistoryCard';

const EducationSection = () => {
  const educationItems = [
    {
      title: 'RMIT University',
      subtitle: 'Melbourne, Australia • July 2024 - June 2026',
      details: ['Masters of Artificial Intelligence'],
    },
    {
      title: 'Savitribai Phule Pune University',
      subtitle: 'Pune, Maharashtra, India • Jan 2021 - Aug 2024',
      details: ['B.E. Computer Science Engineering • 8.2 CGPA'],
    },
  ];

  return <HistoryCard title="Education" items={educationItems} sectionTitle="Education" />;
};

export default EducationSection;
