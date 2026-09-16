import { useInView } from "../hooks/useInView.js";

const flowSteps = [
  "User",
  "Search",
  "City / Category",
  "Service Provider",
  "Profile",
  "Reviews & Ratings",
  "Connect",
];

// One box in the vertical flow diagram, plus the connecting line below it
// (except for the last box, which has no line after it).
function FlowStep({ step, index, isLast }) {
  const [ref, isVisible] = useInView(0.6);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div
        style={{ transitionDelay: `${index * 120}ms` }}
        className={`px-5 py-3 rounded-md border border-core-line bg-core-graphite text-paper-high text-sm font-mono min-w-[190px] text-center transition-all duration-400 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        {step}
      </div>

      {!isLast && (
        <div
          style={{
            transitionDelay: `${index * 120 + 100}ms`,
            transformOrigin: "top",
          }}
          className={`w-px h-8 bg-gradient-to-b from-signal-blue to-signal-cyan transition-all duration-300 ${
            isVisible ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
          }`}
        />
      )}
    </div>
  );
}

function ProblemSolving() {
  const [textRef, textVisible] = useInView();

  return (
    <section className="section-padding py-24 md:py-28 border-t border-core-line bg-core-navy/30">
      <div className="max-w-content mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* Left: explanation */}
        <div
          ref={textRef}
          className={`transition-all duration-500 ${
            textVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          }`}
        >
          <p className="section-label mb-3">Problem Solving</p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-paper-high mb-6">
            I Build to Solve Problems
          </h2>
          <p className="text-paper-mid leading-relaxed mb-4">
            Finding a trustworthy local service provider — a mechanic, an
            electrician, a laborer — usually depends on word-of-mouth or
            unreliable listings. Services Hub was built to solve exactly that
            problem.
          </p>
          <p className="text-paper-mid leading-relaxed">
            It centralizes providers in one place, lets people search by city
            and category, and builds trust through visible profiles, work photos
            and star ratings. I don't just build interfaces — I build software
            around a real, practical problem.
          </p>
        </div>

        {/* Right: animated vertical flow diagram */}
        <div className="flex flex-col items-center">
          {flowSteps.map((step, index) => (
            <FlowStep
              key={step}
              step={step}
              index={index}
              isLast={index === flowSteps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProblemSolving;
