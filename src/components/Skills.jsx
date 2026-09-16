import skillCategories from "../data/skills.js";
import { useInView } from "../hooks/useInView.js";

// One skill-category card, fading in and sliding up on scroll.
function SkillCategoryCard({ category, delay }) {
  const [ref, isVisible] = useInView();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`group rounded-lg border border-core-line bg-core-navy/50 p-6 hover:border-signal-blue hover:shadow-glowBlue transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
    >
      <h3 className="font-display text-lg text-signal-cyan mb-4">
        {category.title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="text-sm px-3 py-1.5 rounded-md bg-core-graphite text-paper-high border border-core-line group-hover:border-signal-blue/40 transition-colors duration-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function Skills() {
  const [labelRef, labelVisible] = useInView();
  const [titleRef, titleVisible] = useInView();

  return (
    <section
      id="skills"
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
          Skills
        </p>

        <h2
          ref={titleRef}
          className={`font-display font-semibold text-3xl md:text-4xl text-paper-high mb-14 transition-all duration-500 delay-100 ${
            titleVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          What I Work With
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, index) => (
            <SkillCategoryCard
              key={category.title}
              category={category}
              delay={index * 80}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
