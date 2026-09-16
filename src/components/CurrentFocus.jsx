import { useInView } from "../hooks/useInView.js";

const focusAreas = [
  {
    title: "MERN Stack",
    items: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Authentication",
      "Backend Development",
    ],
  },
  {
    title: "Computer Engineering",
    items: [
      "Programming",
      "Software Engineering",
      "Problem Solving",
      "Computer Technology",
    ],
  },
];

// One focus-area card that fades in on scroll.
function FocusCard({ area, delay }) {
  const [ref, isVisible] = useInView();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`rounded-lg border border-core-line bg-core-graphite/40 p-7 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
    >
      <h3 className="font-display text-xl text-paper-high mb-4">
        {area.title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {area.items.map((item) => (
          <span
            key={item}
            className="text-sm px-3 py-1.5 rounded-md border border-core-line text-signal-cyan"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function CurrentFocus() {
  const [labelRef, labelVisible] = useInView();
  const [titleRef, titleVisible] = useInView();

  return (
    <section className="section-padding py-24 md:py-28 border-t border-core-line bg-core-navy/30">
      <div className="max-w-content mx-auto">
        <p
          ref={labelRef}
          className={`section-label mb-3 transition-all duration-500 ${
            labelVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          Currently Learning
        </p>

        <h2
          ref={titleRef}
          className={`font-display font-semibold text-3xl md:text-4xl text-paper-high mb-14 transition-all duration-500 delay-100 ${
            titleVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          Where I'm Headed Next
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {focusAreas.map((area, index) => (
            <FocusCard key={area.title} area={area} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CurrentFocus;
