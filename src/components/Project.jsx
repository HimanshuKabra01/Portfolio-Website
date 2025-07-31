import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

export default function Project() {

  const projectDetails = [
    { name: "Discord Clone", description: "This is my project for showcasing my HTML and CSS skills", github: "https://github.com/HimanshuKabra01/Discord-Clone" }
  ];
  return(
    <div>
      <div className="font-secondary mb-4 text-white underline text-[25px]">
        PROJECTS
      </div>
      {projectDetails.map((project, idx) => {
        return(
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
            className="relative bg-white/5 p-4 min-h-[500px] flex flex-col"
          >
            <div className="w-full h-[250px] bg-white/10 rounded-md mb-4 flex items-center justify-center">
              <span className="text-white/50 text-sm">Image Placeholder</span>
            </div>

            <h2 className="text-[25px] font-heading text-[#00f0ff] drop-shadow-[0_0_12px_#00f0ff] mb-2">
              {project.name}
            </h2>
            <div className="text-[#ff00d4] font-heading text-[22px]">
              {project.description}
            </div>

            {/* Footer */}
            <div className="mt-4 absolute bottom-3 right-3 flex space-x-2">
              <a
                href={project.github || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white flex items-center gap-1 text-sm"
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
        );
      })}
      <div className="absolute right-50 bottom-60">
        <img height="180em" src="https://github-readme-stats.hackclub.dev/api/wakatime?username=4311&api_domain=hackatime.hackclub.com&&custom_title=Hackatime+Stats&layout=compact&cache_seconds=0&langs_count=8&theme=blue-green"/>
      </div>
    </div>
  );
}