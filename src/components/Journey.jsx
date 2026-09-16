import journeySteps from "../data/journey.js";
import { useInView } from "../hooks/useInView.js";

// One stage on the journey timeline, fading in and sliding in from the left.
function JourneyStep({ step, index }) {
  const [ref, isVisible] = useInView(0.5);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 50}ms` }}
      className={`relative transition-all duration-500 ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
      }`}
    >
      <div className="absolute -left-8 md:-left-10 top-1.5 h-4 w-4 rounded-full bg-core-black border-2 border-signal-cyan" />

      <span className="font-mono text-xs text-paper-low">
        Stage {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="font-display text-xl md:text-2xl text-paper-high mt-1 mb-2">
        {step.title}
      </h3>
      <p className="text-paper-mid max-w-lg mb-3">{step.description}</p>

      {step.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {step.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-2.5 py-1 rounded border border-core-line text-signal-cyan"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function Journey() {
  const [labelRef, labelVisible] = useInView();
  const [titleRef, titleVisible] = useInView();
  const [introRef, introVisible] = useInView();

  return (
    <section
      id="journey"
      className="section-padding py-24 md:py-28 border-t border-core-line bg-core-navy/30"
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
          My Journey
        </p>

        <h2
          ref={titleRef}
          className={`font-display font-semibold text-3xl md:text-4xl text-paper-high mb-4 max-w-2xl transition-all duration-500 delay-100 ${
            titleVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          Computer Engineering & MERN Stack
        </h2>

        <p
          ref={introRef}
          className={`text-paper-mid max-w-xl mb-16 transition-all duration-500 delay-200 ${
            introVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          I'm not limited to one technology. Here is the path I've taken so far,
          one stage at a time.
        </p>

        <div className="relative pl-8 md:pl-10">
          <div className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-signal-blue via-signal-cyan to-signal-violet" />

          <div className="space-y-14">
            {journeySteps.map((step, index) => (
              <JourneyStep key={step.id} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Journey;
