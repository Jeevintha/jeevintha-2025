import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub, FaPython, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiBootstrap, SiMicrosoftoffice, SiExpress, SiMongodb, SiPostman, SiAxios } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import { TbBrandVscode } from "react-icons/tb";
import { SiVercel, SiNetlify, SiFramer, SiJsonwebtokens } from "react-icons/si";
import { useState } from "react";

const CertificateModal = ({ isOpen, onClose, src }) => {
  if (!isOpen) return null;
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center  justify-center bg-black/0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={onClose}
    >
      <img src={src} alt="Certificate" className="w-[80%] object-contain" />
    </motion.div>
  );
};

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
      { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      { name: "HTML", icon: <FaHtml5 className="text-[#E34F26]" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-[#1572B6]" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="text-[#7952B3]" /> },
      { name: "Framer Motion", icon: <SiFramer className="text-[#0055FF]" /> }
    ]
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-[#8CC84B]" /> },
      { name: "Express.js", icon: <SiExpress className="text-[#ffffff]" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      { name: "JWT", icon: <SiJsonwebtokens className="text-[#383838] dark:text-[#ffffff]" /> },
      { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
      { name: "RESTful APIs", icon: <MdDesignServices className="text-[#FF5733]" /> },
      { name: "Axios", icon: <SiAxios className="text-[#5A29E3]" /> }
    ]
  },
  {
    title: "Dev Tools",
    skills: [
      { name: "Version Control", icon: <FaGitAlt className="text-[#F05032]" /> },
      { name: "VS Code", icon: <TbBrandVscode className="text-[#007ACC]" /> },
      { name: "GitHub", icon: <FaGithub className="text-white" /> },
      { name: "Vercel", icon: <SiVercel className="text-white" /> },
      { name: "Netlify", icon: <SiNetlify className="text-[#00C7B7]" /> },
      { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> }
    ]
  }
];

const SkillCard = ({ skill }) => (
  <motion.div
    whileHover={{ y: -5, scale: 1.01 }}
    className="relative group"
  >
    <div className="relative flex items-center p-6 bg-zinc-900/50 backdrop-blur-sm rounded-lg border border-zinc-800/50 group-hover:border-white/10 transition-all duration-300">
      {/* Icon with subtle animation */}
      <motion.div
        animate={{ y: [-1, 1, -1] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="relative mr-4"
      >
        <div className="text-4xl text-white/70 group-hover:text-white transition-colors duration-300">
          {skill.icon}
        </div>
      </motion.div>

      {/* Skill name with subtle hover effect */}
      <h4 className="text-base font-medium text-zinc-400 group-hover:text-white transition-colors duration-300">
        {skill.name}
      </h4>
    </div>
  </motion.div>
);

const CategorySection = ({ category }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    className="relative"
  >
    <div className="mb-8">
      <h3 className="text-2xl font-medium text-white/80">
        {category.title}
      </h3>
      <div className="mt-2 h-px w-16 bg-white/10" />
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      {category.skills.map((skill, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <SkillCard skill={skill} />
        </motion.div>
      ))}
    </motion.div>
  </motion.div>
);

export default function Skills() {
  const [selectedCert, setSelectedCert] = useState(null);
  
  return (
    <div id="skills" className="relative min-h-screen w-full  py-20 px-4">

      <div className="max-w-6xl mx-auto space-y-20 relative">
        {/* Title Section */}
        <div>
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Technical Expertise
            <motion.span
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </motion.h2>

          {/* Skills Grid */}
          <div className="space-y-16">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
              >
                <CategorySection category={category} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certificates Section */}
        <div className="pt-20">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold text-center mb-12 bg-clip-text text-transparent"
          >
            Certifications
          </motion.h3>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              { src: "/Media/js.jpeg", alt: "JavaScript Certificate" },
              { src: "/Media/rwd.jpeg", alt: "Responsive Web Design Certificate" }
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative group cursor-pointer"
                onClick={() => setSelectedCert(cert.src)}
              >
                <img
                  src={cert.src}
                  alt={cert.alt}
                  className="w-[200px] rounded-lg border-2 border-transparent group-hover:border-purple-500 transition-all"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all rounded-lg">
                  <span className="absolute bottom-2 left-2 text-sm text-white">
                    Click to view
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      <CertificateModal 
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
        src={selectedCert}
      />
    </div>
  );
}