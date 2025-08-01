import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

export default function Project() {
  const projectDetails = [
    { 
      name: "Discord Clone", 
      description: "This is my project for showcasing my HTML and CSS skills", 
      github: "https://github.com/HimanshuKabra01/Discord-Clone" 
    }
  ];

  return (
    <div className="w-full">
      <div className="font-secondary mb-6 text-white underline text-2xl md:text-3xl">
        PROJECTS
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
          {projectDetails.map((project, idx) => (
            <motion.div
              key={idx}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              initial={{ opacity: 0, x: -100 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 15,
              }}
              className="relative bg-white/5 p-4 rounded-xl flex flex-col shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image Placeholder */}
              <div className="w-full h-40 sm:h-48 md:h-56 bg-white/10 rounded-md mb-4 flex items-center justify-center">
                <span className="text-white/50 text-sm">Image Placeholder</span>
              </div>

              {/* Project Name */}
              <h2 className="text-xl md:text-2xl font-heading text-[#00f0ff] drop-shadow-[0_0_12px_#00f0ff] mb-2">
                {project.name}
              </h2>

              {/* Project Description */}
              <div className="text-[#00FF00] font-heading text-lg md:text-xl mb-4">
                {project.description}
              </div>

              <div className="mt-auto flex justify-end">
                <a
                  href={project.github || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white flex items-center gap-1 text-sm bg-white/20 px-3 py-1 rounded-md hover:bg-[#00f0ff]/30 transition"
                >
                  <span>More Info</span>
                  <Github size={18} />
                </a>
              </div>

              <span className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white" />
              <span className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-white" />
              <span className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-white" />
              <span className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-white" />
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col items-center lg:items-center gap-6 lg:w-[350px] mx-auto">
          <img 
            className="shadow-lg max-w-full"
            height="180em" 
            src="https://github-readme-stats.hackclub.dev/api/wakatime?username=4311&api_domain=hackatime.hackclub.com&&custom_title=Hackatime+Stats&layout=compact&cache_seconds=0&langs_count=8&theme=blue-green"
            alt="Hackatime Stats"
          />
          <img 
            className="shadow-lg max-w-full"
            src="https://ssr-contributions-svg.vercel.app/_/HimanshuKabra01?chart=3dbar&gap=0.6&scale=2&gradient=true&flatten=0&animation=mess&animation_duration=6&animation_loop=true&format=svg&weeks=50&theme=purple&widget_size=large&colors=FF6F61,FF9671,FFC15E,72F2EB,1282A2,FCE2DB,FAD4D8,DBDFFD&dark=true"
            alt="GitHub Contributions"
          />
        </div>
      </div>
    </div>
  );
}
