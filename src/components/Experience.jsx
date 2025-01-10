import React from 'react';
import HistoryCard from './HistoryCard';

const Experience = () => {
  const experienceItems = [
    {
      title: 'Full Stack Intern',
      subtitle: 'ABJA Consulting Services • Pune, Maharashtra, India • Mar 2023 - May 2023',
      details: [
        'Successfully redesigned the website for ABJA CS, enhancing its functionality and appeal',
        'Quickly acquired and applied React technologies during the project',
        'Efficiently improved website load times, enhancing user experience and search engine ranking',
      ],
    },
    {
      title: 'ML/AI Intern',
      subtitle: 'Knowledge Solutions India (KSI) • Pune, Maharashtra, India • Sep 2021 - Nov 2021',
      details: [
        'Developed models using Support Vector Machine (0.92 score) and K-Nearest Neighbour (0.87 score) algorithms',
        'Performed feature engineering and dimension reduction for improved prediction scores',
        'Applied ML/AI concepts to new datasets while maintaining accuracy',
      ],
    },
  ];

  return <HistoryCard title="Work Experience" items={experienceItems} sectionTitle="Work Experience" />;
};

export default Experience;
