import React from 'react';

const Card = ({ title, skills }) => (
  <div className="bg-[#1d2d50] border-[#64ffda]/20 shadow-xl hover:shadow-[#64ffda]/5">
    <div className="p-4">
      <h3 className="text-[#ccd6f6] text-xl font-bold capitalize">{title}</h3>
    </div>
    <div className="p-4">
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span key={index} className="px-3 py-1 bg-[#64ffda]/10 text-[#64ffda] rounded-full font-medium text-sm border border-[#64ffda]/20">
            {skill}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default Card;
