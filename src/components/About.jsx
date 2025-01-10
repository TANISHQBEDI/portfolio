import React from 'react';
import HistoryCard from './HistoryCard';

const About = () => {
  const aboutItems = [
    {
      title: 'About Me',
      subtitle: '',
      details: [
        'Currently pursuing a Master of Artificial Intelligence, building expertise in software engineering and data-driven technologies.',
        'Experienced in full-stack development with proficiency in React, Express.js, and Python.',
        'Successfully redesigned the website for ABJA Consulting Services, enhancing user experience and performance.',
        'Hands-on experience in machine learning projects, including developing high-accuracy models and applying advanced techniques for feature engineering.',
        'Committed to continuous learning and applying modern tools and methodologies to solve real-world challenges.',
      ],
    },
  ];

  return <HistoryCard items={aboutItems} sectionTitle={aboutItems.title} id='about'/>;
};

export default About;
