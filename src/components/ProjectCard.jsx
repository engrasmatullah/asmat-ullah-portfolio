import { useInView } from "../hooks/useInView.js";

// One project card. When clicked, it tells the parent (Projects.jsx)
// which project was clicked, so the parent can open the details modal.
function ProjectCard({ project, onOpen, index }) {
  const [ref, isVisible] = useInView(0.25);

  return (
    <button
      ref={ref}
      onClick={() => onOpen(project)}
      style={{ transitionDelay: `${index * 80}ms` }}
      className={`text-left rounded-lg border border-core-line  bg-core-navy/50 overflow-hidden hover:border-signal-blue hover:-translate-y-1.5 transition-all duration-450 flex flex-col h-full ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {/* A simple gradient "image" placeholder instead of a real screenshot,
          styled per project using its accent letter */}
      <div className="h-48 overflow-hidden border-b border-core-line">
        <img
          src={project.image}
          alt={`${project.title} project`}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="p-6 flex flex-col flex-1">
        {project.featured && (
          <span className="text-xs font-mono text-signal-cyan mb-2">
            Primary Project
          </span>
        )}
        <h3 className="font-display text-xl text-paper-high mb-1">
          {project.title}
        </h3>
        <p className="text-sm text-signal-cyan mb-3">{project.subtitle}</p>
        <p className="text-paper-mid text-sm mb-4 flex-1">
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono px-2 py-1 rounded border border-core-line text-paper-mid"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}

export default ProjectCard;
