import { motion } from "framer-motion";
import projects from "./constants";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-lg cursor-pointer rounded-xl overflow-hidden border border-gray-800"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative h-48 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10" />
        <img
          alt={project.title}
          src={project.image.src}
          defer
          className="w-full h-full object-cover"
        />
      </motion.div>
      
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          {project.title}
        </h3>
        
        <p className="text-gray-300">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <span 
              key={i}
              className="px-3 py-1 text-sm bg-gray-800 rounded-full text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <motion.a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-medium"
        >
          View Project
        </motion.a>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div id="projects" className="min-h-screen bg-black py-20 px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills in frontend development,
          user experience design, and problem-solving.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;