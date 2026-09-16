import serviceHub from "../assets/images/service.png";
import foodie from "../assets/images/Foodie.png";
import blog from "../assets/images/Blog.png";
import youtube from "../assets/images/youtube.png";
import pharmacy from "../assets/images/pharmacy.png";
// All project information lives here in one simple array.
// Each project is a plain JavaScript object (no classes, no complex types).
// If Asmat wants to add a new project later, he can just copy one of these
// objects, change the text, and add it to the array.

const projects = [
  {
    id: "services-hub",
    title: "Services Hub",
    image: serviceHub,
    subtitle: "Full-Stack Marketplace · MERN Stack",
    featured: true,
    shortDescription:
      "A full-stack service marketplace that connects users with local service providers by city and category.",
    overview:
      "Services Hub was built to solve a real problem: finding a trustworthy local service provider — a mechanic, an electrician, a laborer — usually depends on word-of-mouth or unreliable listings. Services Hub centralizes providers in one searchable place, organized by city and category.",
    features: [
      "Service provider registration and profile creation",
      "Search by keyword and city",
      "City and category filtering",
      "Photo uploads for provider work samples",
      "Star-rating and review system",
      "Clean, registration-gated user flow",
    ],
    myRole:
      "Designed and built the entire application end-to-end — the React and Tailwind CSS frontend, and the Node.js, Express and MongoDB backend.",
    challenges:
      "Connecting the search and filtering logic on the frontend to real, dynamic data on the backend, and designing a review and rating system that stays simple to use for both providers and customers.",
    solution:
      "Built a REST API with Express and MongoDB to handle providers, searches and reviews, and a React frontend that filters results by city and category in real time.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
    ],
    github: "https://github.com/engrasmatullah/Services-Hub-MERN-complete",
    liveDemo: "https://github.com/engrasmatullah/Services-Hub-MERN-complete",
  },
  {
    id: "foodie",
    title: "Foodie",
    image: foodie,
    subtitle: "Food Ordering Platform",
    featured: false,
    shortDescription:
      "A responsive food-ordering and restaurant delivery website with interactive menus and a clean user experience.",
    overview:
      "Foodie is a food-ordering and restaurant delivery website built to feel fast and easy to browse, with interactive menu carousels and a focus on clean, responsive UI/UX.",
    features: [
      "Interactive menu carousels",
      "Responsive layout for mobile and desktop",
      "Clean browsing and ordering experience",
    ],
    myRole:
      "Built the entire frontend from scratch using HTML, CSS and JavaScript.",
    challenges:
      "Making the menu carousels and layout feel smooth and responsive using only vanilla JavaScript, without a framework.",
    solution:
      "Used Swiper.js for the carousel interactions and hand-built responsive CSS layouts for every screen size.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/engrasmatullah/Foodie-Website",
    liveDemo: "https://github.com/engrasmatullah/Foodie-Website",
  },
  {
    id: "blog-website",
    title: "Blog Website",
    image: blog,
    subtitle: "Dynamic Blog Application",
    featured: false,
    shortDescription:
      "A dynamic blog application using external APIs with client-side routing and state management.",
    overview:
      "A blog application that fetches live data from external APIs (JSONPlaceholder and DummyJSON), built to practice client-side routing and application-wide state management in React.",
    features: [
      "Live data fetched from external APIs",
      "Client-side routing between pages",
      "Global state handled with Context API",
    ],
    myRole:
      "Built the app with React and React Router DOM, and solved prop-drilling issues by introducing Context API.",
    challenges:
      "Passing data between deeply nested components without prop drilling, and keeping routing and data-fetching in sync.",
    solution:
      "Introduced React's Context API to share data across components, and configured React Router DOM for clean client-side navigation.",
    technologies: [
      "React",
      "React Router DOM",
      "Tailwind CSS",
      "Context API",
      "REST APIs",
    ],
    github: "https://github.com/engrasmatullah/Blogging-Website-MERN-",
    liveDemo: "https://github.com/engrasmatullah/Blogging-Website-MERN-",
  },
  {
    id: "youtube-clone",
    title: "YouTube Clone",
    image: youtube,
    subtitle: "Video Platform Interface",
    featured: false,
    shortDescription:
      "A responsive video-platform interface with a Navbar, Sidebar and dynamic menu components.",
    overview:
      "A frontend clone of YouTube's core interface, replicating the Navbar, Sidebar and dynamic menu components using CSS Grid for layout.",
    features: [
      "Navbar with search and icons",
      "Collapsible sidebar",
      "Dynamic menu components",
      "CSS Grid based layout",
    ],
    myRole:
      "Built the entire interface using React, Tailwind CSS and React Icons.",
    challenges:
      "Replicating YouTube's grid-based responsive layout accurately across different screen sizes.",
    solution:
      "Used CSS Grid for the main layout structure and React Icons for a polished, platform-accurate look.",
    technologies: ["React", "Tailwind CSS", "React Icons"],
    github: "https://github.com/engrasmatullah/YouTube-Clone-App-",
    liveDemo: "https://github.com/engrasmatullah/YouTube-Clone-App-",
  },
  {
    id: "pharmacy-management-system",
    title: "Pharmacy Management System",
    image: pharmacy,
    subtitle: "Desktop Application · C# WinForms",
    featured: false,
    shortDescription:
      "A functional pharmacy management system developed using C# and Windows Forms.",
    overview:
      "A complete desktop application for managing a pharmacy, built with C# and WinForms. This project shows a different side of my development background — outside of the browser, working directly with a desktop UI and structured data.",
    features: [
      "Inventory management",
      "Billing",
      "Records management",
      "Built using OOP principles",
      "Uses core DSA concepts for data handling",
    ],
    myRole:
      "Designed and built the full desktop application, including the WinForms interface and the underlying data logic.",
    challenges:
      "Structuring inventory, billing and records data cleanly using object-oriented design, without a web framework to rely on.",
    solution:
      "Applied OOP principles to model pharmacy data and core data structures and algorithms to manage inventory and billing efficiently.",
    technologies: ["C#", "WinForms", "OOP", "DSA"],
    github:
      "https://github.com/engrasmatullah/Pharmacy-Management-System-project",
    liveDemo:
      "https://github.com/engrasmatullah/Pharmacy-Management-System-project",
  },
];

export default projects;
