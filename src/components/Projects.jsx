import { useState } from "react";
import projects from "../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";
import ProjectModal from "./ProjectModal.jsx";
import { useInView } from "../hooks/useInView.js";

function Projects() {
  // selectedProject holds the project object that the user clicked on.
  // When it is null, the modal is hidden.
  const [selectedProject, setSelectedProject] = useState(null);
  const [labelRef, labelVisible] = useInView();
  const [titleRef, titleVisible] = useInView();

  function openProject(project) {
    setSelectedProject(project);
  }

  function closeProject() {
    setSelectedProject(null);
  }

  return (
    <section
      id="projects"
      className="section-padding py-24 md:py-28 border-t border-core-line"
    >
      <div className="max-w-content mx-auto">
        <p
          ref={labelRef}
          className={`section-label mb-3 transition-all duration-500 ${
            labelVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          Projects
        </p>

        <h2
          ref={titleRef}
          className={`font-display font-semibold text-3xl md:text-4xl text-paper-high mb-14 transition-all duration-500 delay-100 ${
            titleVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          Projects I've Built
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={openProject}
              index={index}
            />
          ))}
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={closeProject} />
    </section>
  );
}

export default Projects;
