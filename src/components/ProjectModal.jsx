import { useEffect, useState } from "react";
import { HiX } from "react-icons/hi";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Shows full details for one project in an overlay.
// "project" is null when the modal should be hidden.
function ProjectModal({ project, onClose }) {
  // We keep our own copy of "project" so we can keep rendering it for a
  // moment after it becomes null, just long enough to play the closing
  // (fade-out) animation before it actually disappears.
  const [renderedProject, setRenderedProject] = useState(project);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (project) {
      // A new project was selected: show it immediately, then trigger
      // the "open" animation on the next tick.
      setRenderedProject(project);
      const timer = setTimeout(() => setIsOpen(true), 10);
      return () => clearTimeout(timer);
    } else {
      // Closing: play the "closed" animation first...
      setIsOpen(false);
      // ...then remove it from the DOM after the animation finishes.
      const timer = setTimeout(() => setRenderedProject(null), 250);
      return () => clearTimeout(timer);
    }
  }, [project]);

  if (!renderedProject) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-core-black/80 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-200 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-core-navy border border-core-line rounded-lg max-w-2xl w-full max-h-[85vh] overflow-y-auto transition-all duration-[250ms] ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-4"
        }`}
      >
        <div className="p-6 md:p-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-display text-2xl md:text-3xl text-paper-high">
                {renderedProject.title}
              </h3>
              <p className="text-signal-cyan text-sm mt-1">
                {renderedProject.subtitle}
              </p>
            </div>
            <button
              onClick={onClose}
              aria-label="Close project details"
              className="text-paper-mid hover:text-signal-cyan text-2xl shrink-0"
            >
              <HiX />
            </button>
          </div>

          <ModalBlock title="Overview" text={renderedProject.overview} />

          <div>
            <p className="section-label mb-2">Features</p>
            <ul className="list-disc list-inside text-paper-mid space-y-1 text-sm mb-6">
              {renderedProject.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>

          <ModalBlock title="My Role" text={renderedProject.myRole} />
          <ModalBlock title="Challenges" text={renderedProject.challenges} />
          <ModalBlock title="Solution" text={renderedProject.solution} />

          <div className="mb-6">
            <p className="section-label mb-2">Technologies</p>
            <div className="flex flex-wrap gap-2">
              {renderedProject.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-2.5 py-1 rounded border border-core-line text-paper-high"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4 pt-2">
            {renderedProject.github && (
              <a
                href={renderedProject.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm px-4 py-2 rounded-md border border-core-line text-paper-high hover:border-signal-cyan hover:text-signal-cyan transition-colors"
              >
                <FaGithub /> GitHub
              </a>
            )}
            {renderedProject.liveDemo && (
              <a
                href={renderedProject.liveDemo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm px-4 py-2 rounded-md bg-signal-blue text-core-black hover:bg-signal-cyan transition-colors"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// A small reusable block used several times inside the modal:
// a section label followed by a paragraph of text.
function ModalBlock({ title, text }) {
  return (
    <div className="mb-6">
      <p className="section-label mb-2">{title}</p>
      <p className="text-paper-mid text-sm leading-relaxed">{text}</p>
    </div>
  );
}

export default ProjectModal;
