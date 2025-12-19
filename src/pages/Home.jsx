import Hero from "../components/Hero";
import Experience from "../components/Experience";
import AboutMe from "../components/AboutMe";
import Project from "../components/Project";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="w-full flex flex-col relative min-h-screen overflow-x-hidden">
      
      <div className="absolute inset-0 -z-10 w-full h-full dotted-background"></div>

      {/* Hero Section */}
      <section
        id="home"
        className="relative w-full min-h-screen px-4 sm:px-8 md:px-12 py-12 flex items-center justify-center text-center">
        <Hero />
      </section>

      {/* About Me Section */}
      <section 
        id="about-me"
        className="relative w-full min-h-[80vh] px-4 sm:px-8 md:px-12 py-12 flex flex-col items-center text-center md:text-left">
        <AboutMe />
      </section>

      {/* Projects Section */}
      <section 
        id="project"
        className="relative w-full min-h-[80vh] px-4 sm:px-8 md:px-12 py-12 flex flex-col items-center">
        <Project />
      </section>

      {/* Experience Section */}
      <section 
        id="experience"
        className="relative w-full min-h-[80vh] px-4 sm:px-8 md:px-12 py-12 flex flex-col items-center">
        <Experience />
      </section>

      {/* Contact Section */}
      <section 
        id="contact-me"
        className="relative w-full min-h-[70vh] px-4 sm:px-8 md:px-12 py-12 flex flex-col items-center">
        <ContactMe />
      </section>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
