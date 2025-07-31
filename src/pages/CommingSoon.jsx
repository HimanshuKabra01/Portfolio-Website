import LiveBackground from "../components/LiveBackground";
import { motion } from 'framer-motion';
import { Hourglass } from 'lucide-react';
import Footer from "../components/Footer";

export default function CommingSoon() {
  return (
    <div className="w-full flex flex-col relative">  
      {/* Fullscreen Live Background */}
      <div className="fixed top-0 left-0 w-screen h-screen -z-10 overflow-hidden">
        <LiveBackground />
      </div>

      <section
        id="coming-soon"
        className="relative w-full min-h-screen px-4 py-8 flex items-center justify-center"
      >
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          viewport={{ once: true }}
          transition={{
            type: 'spring',
            stiffness: 120,
            damping: 15
          }}
        >
          <div className="flex flex-col relative font-heading justify-center bg-white/5 p-8 max-w-md text-center shadow-lg rounded-2xl">
            {/* Icon */}
            <div className="text-[#ff00d4] flex justify-center">
              <Hourglass className="w-16 h-16" />
            </div>

            {/* Title */}
            <h1 className="text-[28px] font-heading text-[#00f0ff] drop-shadow-[0_0_12px_#00f0ff] mt-6">
              Coming Soon
            </h1>

            {/* Tagline / Subtext */}
            <p className="text-white/80 text-[20px] mt-3">
              Stay tuned for more content!
            </p>

            {/* Corner Borders */}
            <span className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white" />
            <span className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-white" />
            <span className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-white" />
            <span className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-white" />
          </div>
        </motion.div>
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
