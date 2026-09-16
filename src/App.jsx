import { ThemeProvider } from "./context/ThemeContext.jsx";
import BackgroundScene from "./components/BackgroundScene.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Stats from "./components/Stats.jsx";
import About from "./components/About.jsx";
import Education from "./components/Education.jsx";
import Journey from "./components/Journey.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import ProblemSolving from "./components/ProblemSolving.jsx";
import BeyondWeb from "./components/BeyondWeb.jsx";
import ProjectExperience from "./components/ProjectExperience.jsx";
import CurrentFocus from "./components/CurrentFocus.jsx";
import Interests from "./components/Interests.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import CursorEffect from "./components/CursorEffect.jsx";

// This is the main App component.
// BackgroundScene is fixed behind everything and never scrolls; every
// section above it should keep a transparent or glassy (bg-*/NN opacity)
// background so the scene stays visible through the page.
function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen">
        <BackgroundScene />
        <CursorEffect />
        <Navbar />

        <main className="relative z-0">
          <Hero />
          <Stats />
          <About />
          <Education />
          <Journey />
          <Skills />
          <Projects />
          <ProblemSolving />
          <BeyondWeb />
          <ProjectExperience />
          <CurrentFocus />
          <Interests />
          <Contact />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
