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