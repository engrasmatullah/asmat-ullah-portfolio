import { FaCode, FaBook, FaPen, FaKeyboard } from "react-icons/fa";
import { useInView } from "../hooks/useInView.js";

const hobbies = [
  { label: "Coding", icon: FaCode },
  { label: "Reading", icon: FaBook },
  { label: "Writing", icon: FaPen },
  { label: "Typing", icon: FaKeyboard },
];

// One hobby pill, fading in and sliding up on scroll.
function HobbyPill({ hobby, delay }) {
  const [ref, isVisible] = useInView(0.4);
  const Icon = hobby.icon;

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`flex items-center gap-3 px-5 py-3 rounded-md border border-core-line text-paper-mid transition-all duration-400 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <Icon className="text-signal-cyan" />
      <span className="text-sm">{hobby.label}</span>
    </div>
  );
}

function Interests() {
  const [labelRef, labelVisible] = useInView();
  const [titleRef, titleVisible] = useInView();

  return (
    <section className="section-padding py-20 border-t border-core-line">
      <div className="max-w-content mx-auto">
        <p
          ref={labelRef}
          className={`section-label mb-3 transition-all duration-500 ${
            labelVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          Outside of Work
        </p>

        <h2
          ref={titleRef}
          className={`font-display font-semibold text-2xl md:text-3xl text-paper-high mb-10 transition-all duration-500 delay-100 ${
            titleVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          Hobbies &amp; Interests
        </h2>

        <div className="flex flex-wrap gap-4">
          {hobbies.map((hobby, index) => (
            <HobbyPill key={hobby.label} hobby={hobby} delay={index * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Interests;
