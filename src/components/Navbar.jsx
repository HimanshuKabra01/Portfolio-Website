import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const sections = [
    {name: 'Portfolio', id: 'home'},
    {name: 'Blogs', id: 'blogs'},
    {name: 'Resume', id: 'resume'}
  ];

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-[100000]">
      <div className="flex justify-center mt-4">
        <div className={`relative transition-all duration-700 ease-out overflow-visible
            ${isScrolled 
              ? 'backdrop-blur-md bg-white/10 border border-white/20 rounded-b-xl' 
              : 'bg-transparent border-none'}`}
          style={{
            width: isScrolled ? `${sections.length * 180}px` : '0px',
            height: isScrolled ? '70px' : '0px',
            transitionProperty: 'all',
            transitionDuration: '700ms',
          }}
        >
          <div className="flex justify-center items-center h-full px-4">
            {sections.map((section) => (
              <div
                key={section.id}
                onClick={() => document.getElementById('home')?.scrollIntoView({behavior: 'smooth'})}
                className="group relative text-white font-primary font-medium px-10 cursor-pointer transition-all duration-700 ease-out whitespace-nowrap flex items-center gap-2"
                style={{
                transform: isScrolled 
                  ? 'translateY(0)' 
                  : 'translateY(-100px)',
                opacity: isScrolled ? 1 : 0,
                transitionDelay: `${section.id * 100}ms`
                }}
                >
                {/* Cyber Pulse Dot */}
                <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75 group-hover:scale-125 group-hover:opacity-100 transition-all duration-300"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-400"></span>
                </span>

                {/* Gradient Text on Hover */}
                <span className="relative z-10 group-hover:bg-gradient-to-r from-[#00f0ff] to-[#ff00d4] group-hover:bg-clip-text group-hover:text-transparent transition-colors duration-500">
                {section.name}
                </span>

                {/* Gradient Underline */}
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#00f0ff] to-[#ff00d4] scale-x-0 space-y-5 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" style={{bottom: '-4px'}}></span>
                </div>

            ))}
          </div>

          {/* U-Shaped Line */}
          <div 
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
            style={{
              width: `${sections.length * 180}px`,
              height: '20px',
              borderLeft: '2px solid white',
              borderRight: '2px solid white',
              borderBottom: '2px solid white',
              borderBottomLeftRadius: '12px',
              borderBottomRightRadius: '12px'
            }}
          ></div>
        </div>
      </div>
    </nav>
  );
}
