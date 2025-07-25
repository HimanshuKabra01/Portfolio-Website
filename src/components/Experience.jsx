import { motion } from 'framer-motion';

export default function Experience() {

  const experienceList = [
    {title: "Open Source Developer", company: "GirlScript Summer of Code", description: "Contributing to amazing open source projects",skills:"Open Source Development, Frontend Development", duration: "July 2025 - Present"},
    {title: "Open Source Contributor", company: "Social Summer of Code", description: "Contributing to amazing open source projects",skills:"Open Source Development, Frontend Development",duration: "June 2025 - Present"},
    {title: "Trainee", company: "The Infopreneurs Club", description: "Learnt importance of soft skills, planning and how to implement them in our daily life",skills:"Business Planning, Soft Skills, Passive Income",duration: "Jan 2025 - Feb 2025"},
  ];

  return(
    <div className="space-y-10 relative z-10 w-full px-4 md:px-8 max-w-screen overflow-x-hidden">
      {experienceList.map((experience, index) => {
        return(
          <motion.div 
            key={index}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true}}
            initial={{opacity: 0, x: -100}}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 15,
              delay: index * 0.1
            }}
            className="relative w-full flex justify-start"
          >
            <div className="absolute w-4 h-4 rounded-full bg-[#00f0ff] border-4 border-background -left-7 top-1 animate-ping" />
            <div className="w-full min-h-[140px] p-6 bg-white/5 rounded-lg flex flex-col justify-between">
              <div className="flex flex-wrap justify-between items-center gap-2">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-[25px] font-heading font-semibold font-primary text-[#00f0ff] drop-shadow-[0_0_12px_#00f0ff]">{experience.title}</h3>
                  <span className="px-2 py-0.5 text-xs bg-green-600/20 text-green-400 rounded-md font-mono uppercase">{experience.skills}</span>
                </div>
                <span className="text-[15px] text-cyan font-secondary bg-white rounded-md px-2">{experience.duration}</span>
              </div>
              <div className="text-[#ff00d4] font-heading text-[20px] ">
                <div className="pb-2">{experience.company}</div>
                <div>{experience.description}</div>
              </div>
              <span className="border-corner absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white" />
              <span className="corner-top-right absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-white" />
              <span className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-white" />
              <span className="bottom-right absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-white" />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}