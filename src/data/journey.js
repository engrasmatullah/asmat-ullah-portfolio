// This data powers the "My Journey" section.
// It is a simple, ordered list — each step is one stage of the path
// from Computer Engineering to full MERN stack development.

const journeySteps = [
  {
    id: "step-1",
    title: "Computer Engineering",
    description:
      "Started my academic journey at Bahauddin Zakariya University, Multan, studying the fundamentals of computer engineering.",
    tags: [],
  },
  {
    id: "step-2",
    title: "Programming",
    description:
      "Built a strong base in core programming languages and computer science fundamentals.",
    tags: ["C", "C++", "C#", "Python", "OOP", "DSA"],
  },
  {
    id: "step-3",
    title: "Software Development",
    description:
      "Applied that programming base to a real desktop application, working with structured data and object-oriented design.",
    tags: ["Desktop Applications", "Problem Solving"],
  },
  {
    id: "step-4",
    title: "Frontend Development",
    description:
      "Moved into the browser, learning how to build interfaces people actually use.",
    tags: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    id: "step-5",
    title: "Full-Stack Development",
    description:
      "Extended frontend skills into the backend, learning to build and connect real APIs and databases.",
    tags: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
  {
    id: "step-6",
    title: "MERN Stack",
    description:
      "Now building complete, real-world applications end-to-end using the full MERN stack.",
    tags: ["MongoDB", "Express.js", "React", "Node.js"],
  },
];

export default journeySteps;
