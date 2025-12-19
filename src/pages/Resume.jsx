import ResumeSection from "../components/ResumeSection";
import Footer from "../components/Footer";

export default function Resume() {
  return(
    <div className="w-full flex flex-col relative">  

    <div className="absolute inset-0 -z-10 w-full h-full dotted-background"></div>
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