import { useRef, useState, useEffect } from "react";
import projects from "../data/projects.js";
import skillCategories from "../data/skills.js";
import { useInView } from "../hooks/useInView.js";

const START_YEAR = 2024; // matches the "2024 – 2028" entry in Education.jsx

function buildStats() {
  const projectsCount = projects.length;

  const skillsCount = skillCategories.reduce(
    (total, category) => total + category.skills.length,
    0,
  );

  const techSet = new Set();
  projects.forEach((project) => {
    (project.technologies || []).forEach((tech) => techSet.add(tech));
  });

  const yearsLearning = Math.max(1, new Date().getFullYear() - START_YEAR);

  return [
    {
      id: "projects",
      label: "Projects Built",
      value: projectsCount,
      suffix: "",
    },
    {
      id: "skills",
      label: "Skills Practiced",
      value: skillsCount,
      suffix: "+",
    },
    {
      id: "tech",
      label: "Technologies Used",
      value: techSet.size,
      suffix: "+",
    },
    { id: "years", label: "Years Learning", value: yearsLearning, suffix: "+" },
  ];
}

// Counts a number up from 0 once its card scrolls into view.
function StatCard({ stat, index }) {
  const [ref, isVisible] = useInView(0.6);
  const [displayValue, setDisplayValue] = useState(0);
  const hasAnimated = useRef(false);

  // Whenever "isVisible" becomes true for the first time, start the count.
  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 900;
    const startTime = performance.now();

    function tick(now) {
      const progress = Math.min(1, (now - startTime) / duration);
      // ease-out for a natural "settling" finish
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(eased * stat.value));
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [isVisible, stat.value]);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 80}ms` }}
      className={`glass-surface rounded-3xl hover:border-signal-blue transition-all duration-450 px-6 py-8 text-center ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
    >
      <p className="font-display font-semibold text-4xl md:text-5xl text-paper-high mb-2">
        {displayValue}
        <span className="text-signal-amber">{stat.suffix}</span>
      </p>
      <p className="text-sm text-paper-mid font-mono tracking-wide">
        {stat.label}
      </p>
    </div>
  );
}

function Stats() {
  const stats = buildStats();

  return (
    <section className="section-padding py-16 md:py-20 border-t border-core-line">
      <div className="max-w-content mx-auto grid grid-cols-2 md:grid-cols-4 gap-5">
        {stats.map((stat, index) => (
          <StatCard key={stat.id} stat={stat} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Stats;
