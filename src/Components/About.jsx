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
              src="/girl.webp"
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
            I'm a frontend React developer who turns coffee ☕ into code and dreams into interfaces. When I'm not crafting pixel-perfect components, you'll find me debugging with the patience of a zen master 🧘‍♂️.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-purple-400">What I bring to the table:</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                🚀 <span>React.js expert with a passion for clean code</span>
              </li>
              <li className="flex items-center gap-2">
                💡 <span>Problem solver who loves tackling complex challenges</span>
              </li>
              <li className="flex items-center gap-2">
                🎨 <span>UI/UX enthusiast with an eye for design</span>
              </li>
              <li className="flex items-center gap-2">
                🤝 <span>Team player who brings positive energy to projects</span>
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
              Let's Build Something Cool! 🚀
            </motion.button>
          </div>

          <p className="text-sm text-gray-400 italic">
            "The only way to do great work is to love what you do" - Steve Jobs
          </p>
        </motion.div>
      </div>

      
    </div>
  );
};

export default About;