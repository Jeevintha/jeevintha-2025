import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Stars = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      return Array.from({ length: 200 }, (_, i) => ({
        id: i,
        x: Math.random() * 250,
        y: Math.random() * 250,
        size: Math.random() * 4 + 1,
        delay: Math.random() * 5,
      }));
    };

    setStars(generateStars());
  }, []);

  return (
    <div className="fixed inset-0 h-full">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-[#3ce8ff] rounded-full"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: `${star.y}%`,
            left: `${star.x}%`,
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.2, 1],
            x: [0, Math.random() * 250 - 25, 0],
            y: [0, Math.random() * 250 - 25, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
}
export default Stars;