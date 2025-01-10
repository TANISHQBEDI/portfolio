import React from 'react';
import Card from './Card';

const Skills = ({ skills }) => {
  return (
    <section className="py-16 px-4 bg-[#112240]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-[#ccd6f6]">Skills</h2>
        <div className="grid gap-6">
          {Object.entries(skills).map(([category, skillList]) => (
            <Card key={category} title={`${category} Skills`} skills={skillList} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
