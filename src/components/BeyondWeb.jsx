import { FaMicrochip, FaCode } from "react-icons/fa";
import { useInView } from "../hooks/useInView.js";

const softwareItems = [
  "Programming",
  "Algorithms",
  "Data Structures",
  "OOP",
  "Web Development",
  "Full-Stack Development",
];

const hardwareItems = [
  "Computer Engineering",
  "Hardware Troubleshooting",
  "Computer Technology",
];

function BeyondWeb() {
  const [labelRef, labelVisible] = useInView();
  const [titleRef, titleVisible] = useInView();
  const [introRef, introVisible] = useInView();
  const [softwareRef, softwareVisible] = useInView();
  const [hardwareRef, hardwareVisible] = useInView();

  return (
    <section
      id="beyond-the-web"
      className="section-padding py-24 md:py-28 border-t border-core-line grid-background"
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
          Beyond the Web
        </p>

        <h2
          ref={titleRef}
          className={`font-display font-semibold text-3xl md:text-4xl text-paper-high mb-4 max-w-2xl transition-all duration-500 delay-100 ${
            titleVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          A Computer Engineer, Not Just a Software Engineer & MERN Stack
          Developer
        </h2>

        <p
          ref={introRef}
          className={`text-paper-mid max-w-xl mb-14 transition-all duration-500 delay-200 ${
            introVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          My interest in technology doesn't stop at the browser. It sits at the
          bridge between hardware and software.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div
            ref={softwareRef}
            className={`rounded-lg border border-core-line bg-core-navy/50 p-8 transition-all duration-500 ${
              softwareVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-5"
            }`}
          >
            <div className="flex items-center gap-3 mb-5">
              <FaCode className="text-signal-blue text-xl" />
              <h3 className="font-display text-xl text-paper-high">Software</h3>
            </div>
            <ul className="space-y-2">
              {softwareItems.map((item) => (
                <li key={item} className="text-paper-mid text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div
            ref={hardwareRef}
            className={`rounded-lg border border-core-line bg-core-navy/50 p-8 transition-all duration-500 delay-100 ${
              hardwareVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-5"
            }`}
          >
            <div className="flex items-center gap-3 mb-5">
              <FaMicrochip className="text-signal-cyan text-xl" />
              <h3 className="font-display text-xl text-paper-high">Hardware</h3>
            </div>
            <ul className="space-y-2">
              {hardwareItems.map((item) => (
                <li key={item} className="text-paper-mid text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BeyondWeb;
