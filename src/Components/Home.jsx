import { motion } from "framer-motion";

const Home = () => {

  return (
    <div id="home" className="relative min-h-screen w-full overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      <motion.div className="relative z-20 flex flex-col justify-center items-center min-h-screen text-center w-full px-4">
        <motion.h1 
          className="font-montez tracking-wider text-white text-5xl sm:text-7xl md:text-8xl lg:text-9xl mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Jeevintha
        </motion.h1>

        <motion.div 
          className="overflow-hidden"
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.div 
            className="text-lg sm:text-xl md:text-2xl font-pridi tracking-tight text-gray-300"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Web Developer
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.button
            className="px-6 py-3 text-sm sm:text-base bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
          >
            Explore My Work
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;