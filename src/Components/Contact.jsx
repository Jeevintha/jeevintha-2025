import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const socialLinks = [
  { icon: <FaGithub size={24} />, url: "https://github.com/Jeevintha", label: "GitHub" },
  { icon: <FaLinkedin size={24} />, url: "https://www.linkedin.com/in/jeevintha-m-959677295/", label: "LinkedIn" },
  { icon: <FaTwitter size={24} />, url: "https://x.com/jeevintha", label: "Twitter" }
];

export default function Contact() {
  return (
    <div id="contact" className="relative w-full min-h-screen overflow-hidden bg-black/50">
      <div className="absolute inset-0 z-0">
      </div>
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-black/50 to-black" />
      <div className="relative z-20 container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-4xl text-center space-y-12"
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Let's Connect
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center space-y-8"
          >
            <motion.a
              href="mailto:jeevithajeevi6234@gmail.com"
              className="group relative inline-flex items-center gap-2 px-6 py-3 text-lg md:text-xl bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-100"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope className="text-xl" />
              <span>jeevithajeevi6234@gmail.com</span>
            </motion.a>
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/5 rounded-full hover:bg-white/10 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          <motion.a
            href="/jeevintha-mern-developer-resume.pdf"
            download="jeevintha-mern-developer-resume.pdf"
            className="mt-8 group relative inline-flex items-center gap-2 px-6 py-3 text-lg md:text-xl bg-white/10 rounded-full text-white hover:shadow-md hover:bg-white/20 transition-all duration-100"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17v3a2 2 0 002 2h14a2 2 0 002-2v-3" />
            </svg>
            <span>Resume</span>
          </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
