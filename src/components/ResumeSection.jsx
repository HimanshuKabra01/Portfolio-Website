import { motion } from 'framer-motion';

export default function ResumeSection() {
  return (
    <div className="w-screen min-h-screen flex justify-center items-center p-4">
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        viewport={{ once: true }}
        transition={{
          type: 'spring',
          stiffness: 120,
          damping: 15
        }}
        className="w-full max-w-7xl"
      >
        <div className="relative font-heading bg-white/5 p-6 text-center shadow-lg rounded-lg">
          <h1 className="text-[28px] font-heading text-[#00f0ff] drop-shadow-[0_0_12px_#00f0ff] mb-6">
            My Resume
          </h1>

          {/* Responsive Container */}
          <div className="flex justify-center mb-6">
            <div className="bg-white border border-white/20 shadow-lg w-full max-w-[800px]">
              <iframe
                src="/resumeee.pdf#view=FitH"
                title="Resume"
                className="w-full min-h-[500px] md:min-h-[1000px]"
                style={{ border: "none" }}
              />
            </div>
          </div>

          <a
            href="/resumeee.pdf"
            download
            className="relative inline-block px-6 py-3 text-lg text-white bg-white/20 hover:bg-white/40 shadow-md transition-all"
          >
            Download Resume
            <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white" />
            <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white" />
            <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white" />
            <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}
