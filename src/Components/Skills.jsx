import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiBootstrap,SiMicrosoftoffice } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import { useState } from "react";



const CertificateModal = ({ isOpen, onClose, src }) => {
  if (!isOpen) return null;
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center  justify-center bg-black/80"
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
      { name: "React Js", icon: <FaReact className="text-[#61DAFB]" /> },
      { name: "HTML", icon: <FaHtml5 className="text-[#E34F26]" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-[#1572B6]" /> },
      { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      { name: "Python", icon: <FaPython className="text-[#3776AB]" /> }
    ]
  },
  {
    title: "UI Frameworks and Tools",
    skills: [
      { name: "Bootstrap", icon: <SiBootstrap className="text-[#7952B3]" /> },
      { name: "Vercel", icon: <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAAAAABXZoBIAAAAZ0lEQVR4AWMYwkBICI/krCm45eQ/ftfCKbnp//9FuOTsfv3//98Fh+TB/0BwELtc8H8wiMMqeRUieRWbXPF/KCjGIvkYJvkYU27KfzjoxAi4jwjJ7/KY/keA1ahy3E2dSKCJm2FEAQAD1l2xzdeQ1AAAAABJRU5ErkJggg==" alt="Vercel" className="w-8 h-8" /> },
      { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
      { name: "UI/UX Design", icon: <MdDesignServices className="text-yellow-400" /> },
      { name: "GitHub", icon: <FaGithub className="text-white" /> },
      { name: "MS Office", icon: <SiMicrosoftoffice className="text-[#D83B01]" /> }
    ]
  }
];

export default function Skills() {
  const [selectedCert, setSelectedCert] = useState(null);
  
  return (
    <div id="skills" className="relative min-h-screen w-full bg-black py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-20">
     
        <div>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Technical Expertise
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800"
              >
                <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gray-200">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="flex flex-col items-center p-4 rounded-xl bg-black/50 backdrop-blur-sm border border-gray-800 hover:bg-gray-900 hover:border-gray-700 transition-all duration-300"
                    >
                      <div className="text-4xl md:text-5xl mb-3 transition-transform duration-300 hover:scale-110">
                        {skill.icon}
                      </div>
                      <span className="text-sm md:text-base text-gray-300">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certificates Section */}
        <div className="pt-20">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
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