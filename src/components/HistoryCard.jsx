import React from 'react';
import { ArrowRight } from 'lucide-react';

const HistoryCard = ({ title, items, sectionTitle }) => {
  return (
    <section className="py-16 px-4 bg-[#112240]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-[#ccd6f6]">{sectionTitle}</h2>
        <div className="grid gap-6">
          {items.map((item, index) => (
            <div key={index} className="bg-[#1d2d50] border-[#64ffda]/20 shadow-xl hover:shadow-[#64ffda]/5">
              <div className="p-4">
                <h3 className="text-[#ccd6f6] text-xl font-semibold">{item.title}</h3>
                <p className="text-[#8892b0]">{item.subtitle}</p>
              </div>
              <div className="p-4">
                <ul className="space-y-3">
                  {item.details.map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-[#64ffda] mr-2 mt-1 flex-shrink-0" />
                      <span className="text-[#8892b0]">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistoryCard;
