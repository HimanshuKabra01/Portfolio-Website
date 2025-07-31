import { motion } from 'framer-motion';
import profilePic from '../assets/profile.jpg';
import { Mouse, Send } from 'lucide-react';

export default function Hero() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-2 gap-8 items-center px-4 md:px-8 py-12">
      
      {/* Top Image on Mobile */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="relative w-full max-w-[280px] sm:max-w-[350px] mx-auto p-2 rounded-2xl order-1 md:order-2"
      >
        <img
          src={profilePic}
          alt="profile-pic"
          className="w-full mx-auto object-contain rounded-xl 
                     transition-transform duration-500 hover:scale-105 hover:rotate-1 
                     hover:shadow-[0_0_25px_rgba(0,255,255,0.6)]"
          style={{ maxHeight: '320px' }}
        />
      </motion.div>

      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="flex flex-col space-y-4 text-center md:text-left order-2 md:order-1"
      >
        <h1 className="font-primary text-[34px] sm:text-[48px] md:text-[60px] bg-clip-text text-transparent leading-tight">
          <p className="font-heading text-[#00f0ff] drop-shadow-[0_0_12px_#00f0ff] flex items-center justify-center md:justify-start gap-3 flex-wrap">
            Hi, I'm Himanshu Kabra
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=kabrahimanshu123@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex gap-2 items-center px-3 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium shadow-lg transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-xl active:scale-95 text-sm sm:text-base">
                <Send className="w-4 h-4" />
              </button>
            </a>
          </p>
        </h1>
        <div className="font-heading text-[#ff00d4] text-[18px] sm:text-[22px] whitespace-normal">
          Open‑Source Enthusiast & Software Developer <br /> Driven by a passion for AI/ML
        </div>
        <ul className="font-heading text-[#ff00d4] text-[16px] sm:text-[20px] space-y-1">
          <li>Contributor @GSSoC'25</li>
          <li>Hackathon Finalist - 1 (HackHiest 2025)</li>
          <li>Hackathon Participated - 3</li>
          <li>Practicing DSA..</li>
        </ul>
      </motion.div>

      {/* Scroll Mouse Icon */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <Mouse className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </motion.div>
      </div>
    </div>
  );
}
