import LiveBackground from "../components/LiveBackground";
import ResumeSection from "../components/ResumeSection";
import Footer from "../components/Footer";

export default function Resume() {
  return(
    <div className="w-full flex flex-col relative">  
      {/* Fullscreen Live Background */}
      <div className="fixed top-0 left-0 w-screen h-screen -z-10 overflow-hidden">
        <LiveBackground />
      </div>
      <section id="resume"
        className="relative w-full min-h-screen px-4 py-8 flex items-center">
          <ResumeSection />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}