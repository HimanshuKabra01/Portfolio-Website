import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function AboutMe() {

  const events = [
    { year: "04'2024", text: "Completed Schooling" },
    { year: "08'2024", text: "Started Engineering" },
    { year: "03'2025", text: "Hackathon Participant - HackForImpact" },
    { year: "03'2025", text: `Hackathon Finalist - HackHeist` },
    { year: "04'2025", text: "Hackathon Participant - CodeNakshatra" },
    { year: "06'2025", text: "Contributor - SSoC S4" },
    { year: "07'2025", text: "Contributor - GSSoC"},
    { year: "08'2028", text: "Graduation Completed" },
  ];

  const techStack = ["HTML", "CSS", "JavaScript", "TypeScript", "Tailwind CSS", "React.js", "C++", "C", "Python", "Google Cloud Platform"];

  return (
    <div className="relative z-10 w-full px-4 md:px-8 max-w-screen overflow-x-hidden pointer-events-none">
      {/* Two blocks side by side */}
      <div className="flex justify-center items-stretch gap-6 mb-12">
        {/* Left Block */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ x: -100, opacity: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 120, damping: 15 }}
          className="relative w-full md:w-1/2 p-6 bg-white/5 rounded-lg flex flex-col justify-between min-h-[200px]"
        >
          <h2 className="text-[25px] font-heading font-bold mb-4 text-[#00f0ff] drop-shadow-[0_0_12px_#00f0ff]">About Me</h2>
          <div className="text-[#ff00d4] font-heading text-[22px]">
            I am a second year undergrad pursuing Electronics and Communications Engineering at Maharaja Surajmal Institute of Technology, New Delhi. I have a strong passion for technology and enjoy designing, building, and enhancing innovative solutions to solve real-world problems. My second hobby is to play games and you may find me streaming on YouTube/Twitch. 
          </div>
          {/* Corner Borders */}
          <span className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white" />
          <span className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-white" />
          <span className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-white" />
          <span className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-white" />
        </motion.div>

        {/* Right Block */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ x: 100, opacity: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 120, damping: 15 }}
          className="relative w-full md:w-1/2 p-6 bg-white/5 rounded-lg flex flex-col justify-between min-h-[200px]"
        >
          <div>
            <h2 className="text-[25px] font-heading font-bold mb-4 text-[#00f0ff] drop-shadow-[0_0_12px_#00f0ff]">
              My Tech Stack
            </h2>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, idx) => (
                <div
                  key={idx}
                  className="bg-purple-600/20 text-[#ff00d4] font-mono text-[22px] px-4 py-2 rounded-md pointer-events-none"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* Corner Borders */}
          <span className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white" />
          <span className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-white" />
          <span className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-white" />
          <span className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-white" />
        </motion.div>
      </div>


      {/* Timeline */}
      <div className="mt-12">
        <h3 className="mb-6 font-heading text-[30px] font-semibold text-center text-[#00f0ff] drop-shadow-[0_0_12px_#00f0ff]">
          My Journey
        </h3>
        <div className="relative overflow-x-auto whitespace-nowrap pb-20 pt-12 hide-scrollbar">
          <div className="inline-flex gap-16 relative px-8 items-center">
            {/* Middle timeline line */}
            <div className="absolute top-1/2 left-8 right-8 h-1 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 shadow-[0_0_25px_rgba(0,255,255,0.7)] -translate-y-1/2" />
            {events.map((event, idx) => (
              <div
                key={idx}
                className="relative flex flex-col items-center min-w-[200px] z-10 transition-transform duration-300 hover:scale-105"
              >
                <div className="w-full p-6 bg-white/1 text-center w-48 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] transition-all duration-300">
                  <h4 className="text-xl font-secondary font-bold text-[#00f0ff] drop-shadow-[0_0_12px_#00f0ff]">{event.year}</h4>
                  <p className="text-s font-secondary text-[#ff00d4] mt-1">{event.text}</p>
                  {/* Corner Borders */}
                  <span className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white" />
                  <span className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-white" />
                  <span className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-white" />
                  <span className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

  );
}