import React from 'react';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-[#0a192f] to-[#112240]">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 text-[#ccd6f6]">Tanishq Bedi</h1>
        <p className="text-xl text-[#64ffda] mb-4">Master of AI Student at RMIT University</p>
        <div className="flex justify-center space-x-4 mb-8">
          <a href="#" className="text-[#64ffda] hover:text-[#8892b0] font-medium">
            tanishq.bedi@gmail.com
          </a>
          <a href="#" className="text-[#64ffda] hover:text-[#8892b0] font-medium">
            +61 431347044
          </a>
        </div>
        <div className="flex justify-center space-x-6">
          <a href="https://linkedin.com/in/[your-profile]" className="text-[#8892b0] hover:text-[#64ffda] font-medium">
            LinkedIn
          </a>
          <a href="https://github.com/[your-profile]" className="text-[#8892b0] hover:text-[#64ffda] font-medium">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
