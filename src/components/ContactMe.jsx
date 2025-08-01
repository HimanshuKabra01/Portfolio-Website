import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

export default function ContactMe() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        viewport={{ once: true }}
        transition={{
          type: 'spring',
          stiffness: 120,
          damping: 15
        }}
      >
        <div className="relative font-heading bg-white/5 p-6 max-w-md text-center shadow-lg rounded-lg">
          <h1 className="text-[25px] font-heading text-[#00f0ff] drop-shadow-[0_0_12px_#00f0ff] mb-4">
            Contact Me
          </h1>
          <div className="text-[#00FF00] font-heading text-[22px] mb-6">
            My inbox is always open — whether it’s for a project, a question, or a good meme.
          </div>
          <div className="w-full flex justify-center gap-6 text-[#00FF00]">
            <a href="mailto:kabrahimanshu123@gmail.com" target="_blank" rel="noopener noreffer"><Mail /></a>
            <a href="https://github.com/HimanshuKabra01" target="_blank" rel="noopener noreffer"><Github /></a>
            <a href="https://linkedin.com/in/himanshu-kabra28" target="_blank" rel="noopener noreffer"><Linkedin /></a>
            <a href="https://x.com/HimanshuKa54355" target="_blank" rel="noopener noreffer"><Twitter /></a>
          </div>

          <div className="font-mono mt-5 bg-green-800/20 rounded-md px-2 py-4 text-green-400">
            PS. I am mostly active on Discord and Twitter, my discord username- celestialrage01
          </div>

          {/* Corner Borders */}
          <span className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white" />
          <span className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-white" />
          <span className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-white" />
          <span className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-white" />
        </div>
      </motion.div>
    </div>
  );
}
