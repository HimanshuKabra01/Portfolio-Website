import LiveBackground from "../components/LiveBackground";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import AboutMe from "../components/AboutMe";
import Project from "../components/Project";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";
 
export default function Home() {
  return (
    <div className="w-full flex flex-col relative">
      
      {/* Fullscreen Live Background */}
      <div className="fixed top-0 left-0 w-screen h-screen -z-10 overflow-hidden">
        <LiveBackground />
      </div>

     <section
        id="home"
        className="relative w-full min-h-screen px-4 py-8 flex items-center justify-center">
          <Hero />
      </section>
      <section id="about-me"
        className="relative w-full min-h-screen px-4 py-8 flex items-center">
          <AboutMe />
      </section>
      <section id="project"
        className="relative w-full min-h-screen px-4 py-8 flex items-center">
          <Project />
      </section>
      <section id="experience"
        className="relative w-full min-h-screen px-4 py-8 flex items-center">
          <Experience />
      </section>
      <section id="contact-me"
        className="relative w-full min-h-screen px-4 py-8 flex items-center">
          <ContactMe />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
