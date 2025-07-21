import LiveBackground from "../components/LiveBackground";
import { motion } from 'framer-motion';

export default function Home() {

  return (
    <div className="w-full min-h-[200vh] flex flex-col relative">
      
      {/* Fullscreen Live Background */}
      <div className="fixed top-0 left-0 w-screen h-screen -z-10 overflow-hidden">
        <LiveBackground />
      </div>

      <div className="w-full flex flex-col flex-1 px-4">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="flex flex-col max-w-4xl"
        >
          <h1 className="font-heading text-[60px] bg-gradient-to-r from-[#00f0ff] to-[#ff00d4] bg-clip-text text-transparent">
            <p className="font-heading animate-[flicker_2s_infinite] text-[#00f0ff] drop-shadow-[0_0_12px_#00f0ff]">
              Hi,
            </p>{' '}
            <span> I'm Himanshu</span>
          </h1>
          <div className="font-monospace text-[#ff00d4] text-[30px]">
            <span className="font-heading text-[40px] bg-gradient-to-r from-[#00f0ff] to-[#ff00d4] bg-clip-text text-transparent">
              &gt;
            </span>
            &nbsp; Passionate about Software Development.
          </div>
        </motion.div>
      </div>
    </div>
  );
}
