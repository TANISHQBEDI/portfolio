import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ navigationItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-[#0a192f]/90 shadow-lg backdrop-blur-sm z-50 border-b border-[#64ffda]/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* <span className="text-2xl font-bold text-[#64ffda]">Tanishq Bedi</span> */}
          <div className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-[#8892b0] hover:text-[#64ffda] transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>
          <button className="md:hidden text-[#64ffda]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
