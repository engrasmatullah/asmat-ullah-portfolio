import { useInView } from "../hooks/useInView.js";

const educationHistory = [
  {
    id: "bsc",
    degree: "Bachelor of Computer Engineering",
    school: "Bahauddin Zakariya University, Multan",
    period: "2024 – 2028",
    note: "Currently in progress",
  },
  {
    id: "fsc",
    degree: "FSc (Pre-Engineering)",
    school: "Intermediate Education",
    period: "Completed",
    note: "",
  },
  {
    id: "matric",
    degree: "Matriculation",
    school: "Secondary School Certificate",
    period: "Completed",
    note: "",
  },
];

// One row on the education timeline, fading in and sliding in from the left.
function EducationItem({ item, delay }) {
  const [ref, isVisible] = useInView(0.4);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`relative transition-all duration-500 ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
      }`}
    >
      <div className="absolute -left-8 md:-left-10 top-1.5 h-3.5 w-3.5 rounded-full bg-signal-blue shadow-glowBlue" />
      <p className="text-signal-cyan font-mono text-sm mb-1">{item.period}</p>
      <h3 className="font-display text-xl text-paper-high mb-1">
        {item.degree}
      </h3>
      <p className="text-paper-mid">{item.school}</p>
      {item.note && <p className="text-paper-low text-sm mt-1">{item.note}</p>}
    </div>
  );
}

function Education() {
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
          Education
        </p>

        <h2
          ref={titleRef}
          className={`font-display font-semibold text-3xl md:text-4xl text-paper-high mb-12 transition-all duration-500 delay-100 ${
            titleVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          Academic Background
        </h2>

        <div className="relative pl-8 md:pl-10">
          <div className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-core-line" />

          <div className="space-y-10">
            {educationHistory.map((item, index) => (
              <EducationItem key={item.id} item={item} delay={index * 100} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
