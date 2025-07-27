import LiveBackground from "../components/LiveBackground";
import { motion } from 'framer-motion';
import profilePic from '../assets/profile.jpg';
import { Mouse, Send } from 'lucide-react';
import Experience from "../components/Experience";
import AboutMe from "../components/AboutMe";
 
export default function Home() {
  return (
    <div className="w-full flex flex-col relative">
      
      {/* Fullscreen Live Background */}
      <div className="fixed top-0 left-0 w-screen h-screen -z-10 overflow-hidden">
        <LiveBackground />
      </div>

     <section
        id="home"
        className="relative w-full min-h-screen px-4 py-8 flex items-center justify-center"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="flex flex-col space-y-4 text-center md:text-left"
          >
            <h1 className="font-primary text-[60px] bg-clip-text text-transparent leading-tight">
              <p className="font-heading text-[#00f0ff] drop-shadow-[0_0_12px_#00f0ff] flex items-center gap-3">
                Hi, I'm Himanshu Kabra
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=kabrahimanshu123@gmail.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <button className="flex gap-2 items-center px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium shadow-lg transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-xl active:scale-95">
                    <Send className="w-4 h-4" />
                  </button>
                </a>
              </p>

            </h1>
            <div className="font-heading text-[#ff00d4] text-[30px] whitespace-nowrap">
              Open‑Source Enthusiast & Software Developer <br /> Driven by a passion for AI/ML
            </div>
            <p className="font-heading text-[#ff00d4] text-[25px]">
              <ul>
                <li>Contributor @GSSoC'25 </li>
                <li>Hackathon Finalist - 1 (HackHiest 2025)</li>
                <li>Hackathon Participated - 3</li>
                <li>Practicing DSA..</li>
              </ul>
            </p>

          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="relative w-full md:w-[70%] max-w-[400px] mx-auto p-2 rounded-2xl"
          >
            <img
              src={profilePic}
              alt="profile-pic"
              className="w-full mx-auto object-contain rounded-xl 
                        transition-transform duration-500 hover:scale-105 hover:rotate-1 
                        hover:shadow-[0_0_30px_rgba(0,255,255,0.6)]"
            />
          </motion.div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{y: [0, -10, 0]}}
            transition={{repeat: Infinity, duration: 1.5 }}  
          >
            <Mouse className="w-4 h-4 text-white" />
          </motion.div>
        </div>
      </section>
      <section id="experience"
        className="relative w-full min-h-screen px-4 py-8 flex items-center">
          <AboutMe />
      </section>
      <section id="experience"
        className="relative w-full min-h-screen px-4 py-8 flex items-center">
          <Experience />
      </section>
    </div>
  );
}
