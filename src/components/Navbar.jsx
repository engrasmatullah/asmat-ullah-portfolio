import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import ThemeToggle from "./ThemeToggle.jsx";
import profileImage from "../assets/images/profile.png";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Journey", id: "journey" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Beyond the Web", id: "beyond-the-web" },
  { label: "Contact", id: "contact" },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  }

  return (
    <header
      className={
        "fixed top-0 left-0 w-full z-50 transition-colors duration-300 rounded-b-2xl h-14 " +
        (isScrolled
          ? "glass-surface border-b shadow-glowAmber"
          : "bg-transparent border-b border-transparent")
      }
    >
      <div className="section-padding max-w-content mx-auto flex items-center justify-between  md:h-14">
        <button
          onClick={() => scrollToSection("home")}
          className="font-display font-semibold text-lg text-paper-high tracking-tight"
        >
          Asmat Ullah
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-sm text-paper-mid hover:text-signal-cyan transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
          <ThemeToggle />
          <img
            src={profileImage}
            alt="Asmat Ullah"
            className="w-9 h-9 rounded-full object-cover border border-signal-cyan cursor-pointer"
          />
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            className="text-paper-high text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/*
        Mobile menu.
        We always render this (instead of only rendering it when open),
        and instead animate "max-height" from 0 up to a large enough value.
        This is a simple trick to animate something that would normally use
        height: auto, which plain CSS transitions cannot animate directly.
      */}
      <nav
        className={`md:hidden overflow-hidden glass-surface border-b transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="section-padding py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-left text-paper-mid hover:text-signal-cyan text-base py-1"
            >
              {link.label}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
