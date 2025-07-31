import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pages = [
    { name: 'Portfolio', to: '/' },
    { name: 'Blogs', to: '/comming-soon' },
    { name: 'Resume', to: '/resume' }
  ];

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Animation Variants
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        staggerChildren: 0.1, 
        when: "beforeChildren",
        duration: 0.3 
      } 
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  return (
    <nav className="fixed top-0 w-full z-[100000]">
      {/* Mobile Top Bar */}
      <div className="flex md:hidden justify-between items-center px-6 py-4 backdrop-blur-md bg-white/10 border-b border-white/20 z-[100001]">
        <div className="w-6"></div>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="text-white text-lg font-semibold flex items-center gap-2"
        >
          {isMenuOpen ? <>Close <X size={22} /></> : <><Menu size={22} /></>}
        </button>
        <div className="w-6"></div>
      </div>

      {/* Desktop Navbar */}
      <div className="hidden md:flex justify-center mt-4">
        <div className={`relative transition-all duration-700 ease-out overflow-visible
            ${isScrolled
              ? 'backdrop-blur-md bg-white/10 border border-white/20 rounded-b-xl'
              : 'bg-transparent border-none'}`}
          style={{
            width: isScrolled ? `${pages.length * 180}px` : '0px',
            height: isScrolled ? '70px' : '0px',
            transitionProperty: 'all',
            transitionDuration: '700ms',
          }}
        >
          <div className="flex justify-center items-center h-full px-4">
            {pages.map((page, idx) => (
              <div
                key={idx}
                className="group relative text-white font-primary font-medium px-10 cursor-pointer transition-all duration-700 ease-out whitespace-nowrap flex items-center gap-2"
                style={{
                  transform: isScrolled ? 'translateY(0)' : 'translateY(-100px)',
                  opacity: isScrolled ? 1 : 0,
                  transitionDelay: `${idx * 100}ms`
                }}
              >
                <Link to={page.to} className="flex items-center gap-4">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75 group-hover:scale-125 group-hover:opacity-100 transition-all duration-300"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-400"></span>
                  </span>
                  {page.name}
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#00f0ff] to-[#ff00d4] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" style={{ bottom: '-4px' }}></span>
                </Link>
              </div>
            ))}
          </div>

          {/* U-Shaped Line */}
          <div 
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
            style={{
              width: `${pages.length * 180}px`,
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

      {/* Mobile Row Menu with Animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden w-full bg-white/10 backdrop-blur-md border-t border-white/20 py-4 flex justify-center gap-6 z-[100000]"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {pages.map((page, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <Link
                  to={page.to}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white text-lg font-medium hover:text-cyan-400 transition"
                >
                  {page.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
