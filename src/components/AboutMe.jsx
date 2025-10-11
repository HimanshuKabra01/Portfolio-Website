import { motion } from 'framer-motion';

export default function AboutMe() {
  const events = [
    { year: "04'2024", text: "Completed Schooling" },
    { year: "08'2024", text: "Started Engineering" },
    { year: "03'2025", text: "Hackathon Participant - HackForImpact" },
    { year: "03'2025", text: `Hackathon Finalist - HackHeist` },
    { year: "04'2025", text: "Hackathon Participant - CodeNakshatra" },
    { year: "06'2025", text: "Contributor - SSoC S4" },
    { year: "07'2025", text: "Hackathon Participant - BAH"},
    { year: "07'2025", text: "PA - GSSoC" },
    { year: "08'2028", text: "Graduation Completed" },
  ];

  const techStack = ["HTML", "CSS", "JavaScript", "TypeScript", "Tailwind CSS", "React.js", "C++", "C", "Python", "Google Cloud Platform"];

  return (
    <div className="relative z-10 w-full px-4 md:px-8 max-w-screen overflow-x-hidden">
      {/* Two blocks stack on mobile */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 mb-12">
        {/* Left Block */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ x: -100, opacity: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 120, damping: 15 }}
          className="relative w-full p-4 md:p-6 bg-white/5 rounded-lg flex flex-col justify-between min-h-[200px]"
        >
          <h2 className="text-[20px] md:text-[25px] font-heading font-bold mb-4 text-[#00f0ff] drop-shadow-[0_0_12px_#00f0ff]">
            About Me
          </h2>
          <div className="text-[#00FF00] font-heading text-[18px] md:text-[22px] leading-relaxed">
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
          className="relative w-full p-4 md:p-6 bg-white/5 rounded-lg flex flex-col justify-between min-h-[200px]"
        >
          <div>
            <h2 className="text-[20px] md:text-[25px] font-heading font-bold mb-4 text-[#00f0ff] drop-shadow-[0_0_12px_#00f0ff]">
              My Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {techStack.map((tech, idx) => (
                <div
                  key={idx}
                  className="bg-gray-600/20 text-[#00FF00] font-mono text-[16px] md:text-[22px] px-3 py-1 md:px-4 md:py-2 rounded-md"
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
        <h3 className="mb-6 font-heading text-[24px] md:text-[30px] font-semibold text-center text-[#00f0ff] drop-shadow-[0_0_12px_#00f0ff]">
          My Journey
        </h3>
        <div className="relative overflow-x-auto whitespace-nowrap pb-12 md:pb-20 pt-8 md:pt-12 hide-scrollbar">
          <div className="inline-flex gap-8 md:gap-16 relative px-4 md:px-8 items-center">
            {/* Middle timeline line */}
            <div className="absolute top-1/2 left-4 right-4 md:left-8 md:right-8 h-1 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 shadow-[0_0_25px_rgba(0,255,255,0.7)] -translate-y-1/2" />
            {events.map((event, idx) => (
              <div
                key={idx}
                className="relative flex flex-col items-center min-w-[160px] md:min-w-[200px] z-10 transition-transform duration-300 active:scale-95"
              >
                <div className="w-full p-4 md:p-6 bg-white/10 text-center backdrop-blur-md border border-white/20 shadow-lg hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] transition-all duration-300">
                  <h4 className="text-lg md:text-xl font-secondary font-bold text-[#00f0ff] drop-shadow-[0_0_12px_#00f0ff]">{event.year}</h4>
                  <p className="text-sm md:text-base font-secondary text-[#00FF00] mt-1">{event.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
