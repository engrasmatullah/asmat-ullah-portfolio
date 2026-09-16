import { Suspense, useState } from "react";
import { FiDownload } from "react-icons/fi";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaUserAstronaut,
  FaDownload,
} from "react-icons/fa";
import ThreeDScene from "./ThreeDScene.jsx";
import { useDelayedVisible } from "../hooks/useDelayedVisible.js";

// Stars that will orbit around the profile picture
const ORBIT_STARS = [
  { top: "0%", left: "50%", size: 4, delay: "0s" },
  { top: "50%", left: "100%", size: 3, delay: "0.5s" },
  { top: "100%", left: "50%", size: 4, delay: "1s" },
  { top: "50%", left: "0%", size: 3, delay: "1.5s" },
  { top: "15%", left: "85%", size: 2, delay: "0.8s" },
  { top: "85%", left: "15%", size: 2, delay: "1.8s" },
];

function HeroPhoto() {
  const [imageFailed, setImageFailed] = useState(false);
  // Same timing as the original: photo fades/scales in starting at 0.5s.
  const photoVisible = useDelayedVisible(0.5);

  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-10">
      {/*
        Orbit container.
        The whole container spins continuously (18 seconds per full turn),
        which makes the stars appear to revolve around the photo.
        "animate-[spin_18s_linear_infinite]" reuses Tailwind's built-in
        spin animation but with our own custom duration.
      */}
      <div className="absolute h-72 w-72 sm:h-80 sm:w-80 md:h-96 md:w-96 animate-[spin_18s_linear_infinite]">
        {ORBIT_STARS.map((star, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-signal-cyan animate-twinkle shadow-glowCyan"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              transform: "translate(-50%, -50%)",
              animationDelay: star.delay,
            }}
          />
        ))}
      </div>

      {/* Profile picture: fades and scales in shortly after the page loads */}
      <div
        className={`relative h-56 w-56 sm:h-64 sm:w-64 md:h-80 md:w-80 scale-110 transition-all duration-[800ms] ease-out ${
          photoVisible ? "opacity-100 scale-100" : "opacity-0 scale-[0.85]"
        }`}
      >
        {!imageFailed ? (
          <img
            src="/profile.png"
            alt="Asmat Ullah"
            onError={() => setImageFailed(true)}
            className="h-full w-full object-contain scale-110 rounded-full"
          />
        ) : (
          <div className="h-full w-full flex flex-col items-center justify-center gap-2 text-paper-low">
            <FaUserAstronaut className="text-3xl text-signal-cyan/70" />
            <span className="text-[10px] font-mono text-center px-3 leading-relaxed">
              Add public/profile.png
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

// A single line of hero text that fades up into place after "delay" seconds.
// This replaces framer-motion's textVariant + custom delay pattern.
function FadeInText({ delay, className, children }) {
  const isVisible = useDelayedVisible(delay);

  return (
    <div
      className={`transition-all duration-[600ms] ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function Hero() {
  // Right side (3D scene) fades/scales in a bit after the page loads.
  const sceneVisible = useDelayedVisible(0.3);

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="relative section-padding max-w-content mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center pt-28 pb-16 md:pt-20">
        {/* Left side: text content */}
        <div>
          <FadeInText delay={0} className="font-serif mb-4 text-yellow-200">
            HELLO, I'M
          </FadeInText>

          <FadeInText
            delay={0.15}
            className="font-display font-semibold text-5xl sm:text-6xl md:text-7xl text-paper-high leading-[1.05] mb-5"
          >
            ASMAT <span className="text-highlight">ULLAH</span>
          </FadeInText>

          <FadeInText
            delay={0.3}
            className="font-display text-lg md:text-xl text-signal-cyan mb-5"
          >
            Computer Engineering Student · Full-Stack Developer
          </FadeInText>

          <FadeInText
            delay={0.45}
            className="text-paper-mid text-base md:text-lg max-w-md mb-8 leading-relaxed"
          >
            Building practical software solutions while exploring the world of
            computer engineering, modern web technologies, and full-stack
            development.
          </FadeInText>

          <FadeInText delay={0.6} className="flex flex-row gap-3 mb-5">
            <button
              onClick={() => scrollToSection("journey")}
              className="px-3 py-3 h-12 text-sm rounded-md bg-signal-blue text-white font-medium hover:bg-signal-cyan hover:text-core-black transition-colors duration-200 shadow-glowBlue"
            >
              Explore My Journey
            </button>

            <button
              onClick={() => scrollToSection("projects")}
              className="px-3 py-3 h-12 text-sm rounded-md border border-core-line text-paper-high font-medium hover:border-signal-cyan hover:text-signal-cyan transition-colors duration-200"
            >
              View My Projects
            </button>
            <button
              onClick={() => scrollToSection("journey")}
              className="px-3 py-3 h-12 flex flex-row gap-2 text-sm rounded-md bg-signal-blue text-white font-medium hover:bg-signal-cyan hover:text-core-black transition-colors duration-200 shadow-glowBlue"
            >
              <span>Download Resume</span>

              <span>
                <FiDownload />
              </span>
            </button>
          </FadeInText>

          <FadeInText delay={0.75} className="flex items-center gap-5">
            <a
              href="https://github.com/engrasmatullah"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="text-paper-mid hover:text-signal-cyan text-xl transition-colors"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/asmat-ullah-ab729636b"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="text-paper-mid hover:text-signal-cyan text-xl transition-colors"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:engrasmatullah11@gmail.com"
              aria-label="Send an email"
              className="text-paper-mid hover:text-signal-cyan text-xl transition-colors"
            >
              <FaEnvelope />
            </a>

            <div className="flex items-center gap-2 ml-2 pl-4 border-l border-core-line">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal-cyan opacity-60"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-signal-cyan"></span>
              </span>

              <span className="text-sm text-paper-mid">
                Open to Internship &amp; Opportunities
              </span>
            </div>
          </FadeInText>
        </div>

        {/* Right side: 3D engineering scene + profile photo + orbiting stars */}
        <div className="relative h-[320px] sm:h-[420px] md:h-[520px]">
          <div
            className={`h-full w-full transition-all duration-[900ms] ease-out ${
              sceneVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <Suspense fallback={null}>
              <ThreeDScene />
            </Suspense>
          </div>

          {/* Profile picture and orbiting stars */}
          <HeroPhoto />
        </div>
      </div>
    </section>
  );
}

export default Hero;
