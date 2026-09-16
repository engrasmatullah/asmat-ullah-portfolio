import { useEffect, useRef, useState } from "react";

// This custom hook watches an element and tells us when it has scrolled
// into view. We use this to trigger the fade-in animation, instead of
// using the framer-motion library.
function useInView() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Once it becomes visible, mark it visible and stop watching
        // (this matches "viewport={{ once: true }}" from before).
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }, // fire when 30% of the element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
}

function About() {
  const [textRef, textVisible] = useInView();
  const [cardRef, cardVisible] = useInView();

  return (
    <section id="about" className="section-padding py-24 md:py-32">
      <div className="max-w-content mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
        {/* Left: heading and paragraph */}
        <div
          ref={textRef}
          className={`md:col-span-3 transition-all duration-700 ${
            textVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <p className="section-label mb-3">About Me</p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-paper-high mb-6">
            A Computer Engineering student who builds things
          </h2>

          <div className="space-y-4 text-paper-mid text-base md:text-lg leading-relaxed max-w-xl">
            <p>
              I'm a Computer Engineering student at Bahauddin Zakariya
              University, Multan, with a strong interest in software development
              and modern technology. What started as curiosity about how
              websites work turned into a genuine habit of building things —
              first with HTML, CSS and JavaScript, then React, and now Node.js,
              Express and MongoDB.
            </p>
            <p>
              I care about the full picture of computer engineering, not just
              one layer of it. That means I'm as interested in how a circuit or
              a machine works as I am in how a REST API handles a request. I
              like taking on problems I don't fully know the answer to yet, and
              learning what I need to solve them.
            </p>
            <p>
              Most of what I know, I taught myself by building real projects and
              getting stuck — then figuring my way through it. I'm currently
              growing that foundation into full-stack, MERN development, with
              the long-term goal of becoming a production-level backend
              developer.
            </p>
          </div>
        </div>

        {/* Right: personal profile card */}
        <div
          ref={cardRef}
          className={`md:col-span-2 transition-all duration-700 delay-150 ${
            cardVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <div className="rounded-lg border border-core-line bg-core-navy/60 p-6">
            <p className="section-label mb-5">Profile</p>

            <dl className="space-y-4 text-sm">
              <ProfileRow label="Name" value="Asmat Ullah" />
              <ProfileRow label="Father's Name" value="Saif Ullah" />
              <ProfileRow label="Nationality" value="Pakistan" />
              <ProfileRow label="Domicile" value="Jhang, Punjab" />
              <ProfileRow label="Languages" value="English, Urdu, Punjabi" />
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

// A small reusable row for the profile card: a label on the left, value on the right.
function ProfileRow({ label, value }) {
  return (
    <div className="flex justify-between gap-4 border-b border-core-line pb-3">
      <dt className="text-paper-low">{label}</dt>
      <dd className="text-paper-high text-right">{value}</dd>
    </div>
  );
}

export default About;
