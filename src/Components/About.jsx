import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="text-white min-h-screen flex items-center justify-center p-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -90 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-3/4 mx-auto"
        >
          <div className="bg-gradient-to-tr from-blue-500 to-purple-500 rounded-2xl p-1">
            <img
              src="/flower.jpg"
              alt="Jeevintha"
              className="rounded-2xl object-cover w-full h-full"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 90 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold flex items-center gap-2">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Hello World!</span> 
            <span>👋</span>
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            I'm a passionate full stack developer, building end-to-end web solutions.<br/> I love bringing ideas to life through code 💻.<br/> You'll find me solving complex problems with elegant solutions 🎯.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-purple-400">What I bring to the table:</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                🚀 <span>Full stack expertise in MERN (MongoDB, Express.js, React.js, Node.js)</span>
              </li>
              <li className="flex items-center gap-2">
                ⚡ <span>Experience in building scalable APIs and microservices</span>
              </li>
              <li className="flex items-center gap-2">
                🎨 <span>Strong frontend skills with modern UI/UX principles</span>
              </li>
              <li className="flex items-center gap-2">
                🛠️ <span>Database design and optimization specialist</span>
              </li>
              <li className="flex items-center gap-2">
                🤝 <span>Collaborative team player with excellent communication skills</span>
              </li>
            </ul>
          </div>

          <div className="pt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full font-medium"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Create Something Amazing! 🚀
            </motion.button>
          </div>

          <p className="text-sm text-gray-400 italic">
            "Innovation distinguishes between a leader and a follower" - Steve Jobs
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;