const sanitizeURL = (url) => {
  try {
    const sanitized = new URL(url);
    if (sanitized.protocol !== 'https:') {
      return '#';
    }
    return sanitized.href;
  } catch {
    return '#';
  }
};


const projects = [
  {
    title: "MealMesh",
    description: "A full-stack MERN application for coordinating meal donations between restaurants, organizations.",
    shortDescription: "Food Donation Network Platform",
    image: {
      src: "/Media/mealmesh.jpg",
    },
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    link: sanitizeURL("https://mealmesh.vercel.app/")
  },
  {
    title: "Super Fit",
    description: "A fitness app that helps you track your workouts, improvements and stay motivated.",
    shortDescription: "Track your Workouts Like a Pro",
    image: {
      src: "/Media/superfit-preview.jpeg",
    },
    tech: ["React", "Tailwind CSS", ],
    link: sanitizeURL("https://super-fit.vercel.app/")
  },
  {
    title: "Gemini Clone",
    description: "A clone of Google's Gemini AI chat interface with similar functionality and features.",
    shortDescription: "AI Powered Chat Assistant",
    image: {
      src: "/Media/gemini-preview.jpg",
    },
    tech: ["React", "Gemini API integration" ],
    link: sanitizeURL("https://gemini-clone-jeevintha.vercel.app/")
  },
  {
    title: "Weather Man",
    description: "A weather application that provides real-time weather updates and forecasts for any location.",
    shortDescription: "Real-time Weather Updates",
    image: {
      src: "/Media/weather-preview.jpg",
    },
    tech: ["React", "OpenWeather API integration", ],
    link: sanitizeURL("https://weather-app-jeevintha.vercel.app/")
  },
  {
    title: "Jeevizon",
    description: "An interactive E-commerce platform where you can sign up and view products",
    shortDescription: "Interactive E-commerce platform",
    image: {
      src: "/Media/amazon.jpeg",
    },
    tech: ["HTML", "CSS", "JavaScript"],
    link: sanitizeURL("https://jeevizon.vercel.app")
  },
  {
    title: "Spicy Hut",
    description: "A restaurant website that displays the menu and contact information.",
    shortDescription: "Simple Restaurant website with Menu",
    image: {
      src: "/Media/Spicyhut.jpeg",
    },
    tech: ["HTML", "CSS", "JavaScript"],
    link: sanitizeURL("https://github.com/Jeevintha/spicy-hut")
  },
  {
    title: "Task Management",
    description: "A task management app that helps you track your tasks and their status.",
    shortDescription: "Task Management App",
    image: {
      src: "/Media/task.jpeg",
    },
    tech: ["JavaScript","HTML", "CSS" ],
    link: sanitizeURL("https://github.com/Jeevintha/task-management")
  },
].map(project => ({
  ...project,
  link: sanitizeURL(project.link)
}));


export default projects 