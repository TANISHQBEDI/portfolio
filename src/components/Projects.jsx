import React from 'react';
import HistoryCard from './HistoryCard';

const Projects = () => {
  const projectItems = [
    {
      title: 'Smart Attendance System',
      subtitle: 'Group Project • Pune, Maharashtra, India',
      details: [
        'Developed face recognition system using Haar Cascade and LBPH algorithm',
        'Implemented backend using Express for React and Flask for Python',
        'Published paper in TIJER journal as part of coursework',
      ],
    },
    // Add other project items here
  ];

  return <HistoryCard title="Projects" items={projectItems} sectionTitle="Projects" />;
};

export default Projects;
