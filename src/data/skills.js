// Skills are grouped into categories instead of using fake percentages.
// Each category is one object with a title and a list of skill names.

const skillCategories = [
  {
    title: "Programming",
    skills: ["JavaScript", "Python", "C", "C++", "C#"],
  },
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "React.js",
      "Redux Toolkit",
      "React Router",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL"],
  },
  {
    title: "Software Development",
    skills: ["OOP", "DSA", "C#", "WinForms", ".NET Framework"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Visual Studio", "Postman"],
  },
  {
    title: "Other Technical Skills",
    skills: ["Hardware Troubleshooting"],
  },
];

export default skillCategories;
