import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section-padding py-12 border-t border-core-line">
      <div className="max-w-content mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="font-display text-lg text-paper-high">Asmat Ullah</p>
          <p className="text-paper-low text-sm">
            Computer Engineering Student · Full-Stack / MERN Developer
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/engrasmatullah"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="text-paper-mid hover:text-signal-cyan text-lg transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/asmat-ullah-ab729636b"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="text-paper-mid hover:text-signal-cyan text-lg transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:engrasmatullah11@gmail.com"
            aria-label="Send an email"
            className="text-paper-mid hover:text-signal-cyan text-lg transition-colors"
          >
            <FaEnvelope />
          </a>
        </div>

        <p className="text-paper-low text-sm">
          © {currentYear} Asmat Ullah. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
