import { useInView } from "../hooks/useInView.js";

const experienceItems = [
  {
    title: "Full-Stack Project Development",
    description:
      "Designed and built Services Hub end-to-end, from the React frontend to the Node.js, Express and MongoDB backend.",
  },
  {
    title: "Frontend Projects",
    description:
      "Built multiple frontend projects — Foodie, a Blog app and a YouTube clone — focused on responsive, interactive UI.",
  },
  {
    title: "Desktop Application Development",
    description:
      "Built a complete Pharmacy Management System using C# and WinForms, applying OOP and DSA concepts.",
  },
  {
    title: "API Integration",
    description:
      "Fetched and managed live data from external APIs like JSONPlaceholder and DummyJSON in React applications.",
  },
  {
    title: "Database Work",
    description:
      "Designed and connected MongoDB collections for providers, searches and reviews in Services Hub.",
  },
  {
    title: "Problem Solving",
    description:
      "Approached each project by starting from a real problem — like finding a trustworthy local service provider — and building a solution around it.",
  },
];

// One card in the experience grid, fading in and sliding up on scroll.
function ExperienceCard({ item, delay }) {
  const [ref, isVisible] = useInView();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`rounded-lg border border-core-line p-6 transition-all duration-400 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
    >
      <h3 className="font-display text-base text-signal-cyan mb-2">
        {item.title}
      </h3>
      <p className="text-paper-mid text-sm leading-relaxed">
        {item.description}
      </p>
    </div>
  );
}

function ProjectExperience() {
  const [labelRef, labelVisible] = useInView();
  const [titleRef, titleVisible] = useInView();

  return (
    <section className="section-padding py-24 md:py-28 border-t border-core-line">
      <div className="max-w-content mx-auto">
        <p
          ref={labelRef}
          className={`section-label mb-3 transition-all duration-500 ${
            labelVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          Experience
        </p>

        <h2
          ref={titleRef}
          className={`font-display font-semibold text-3xl md:text-4xl text-paper-high mb-14 transition-all duration-500 delay-100 ${
            titleVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          Project Experience
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {experienceItems.map((item, index) => (
            <ExperienceCard key={item.title} item={item} delay={index * 60} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectExperience;
