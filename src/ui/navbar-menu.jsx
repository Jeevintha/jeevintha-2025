import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
  href
}) => {
  return (
    <a
    onClick={(e) => {
      e.preventDefault();
      document.getElementById(href)?.scrollIntoView({ behavior: 'smooth' });
    }}
      onMouseEnter={() => {
        setActive(item);
      }}
      href={`${href}`}
      className="relative"
    >
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer hover:opacity-[0.9] text-white"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-black backdrop-blur-sm  rounded-2xl overflow-hidden border border-white/[0.2] shadow-xl"
              >
                <motion.div
                  layout
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </a>
    
  );
};

export const Menu = ({
  setActive,
  children
}) => {
  
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();

        if (direction < 0 ) {
          setVisible(true);
        } else {
          setVisible(false);
        }

    }
  }
  );
  return (
    (<AnimatePresence mode="wait">
      <motion.nav
      initial={{
        opacity: 1,
        y: 0,
      }}
      animate={{
        y: visible ? 0 : -100,
        opacity: visible ? 1 : 0,
      }}
      transition={{
        duration: 0.2,
      }}
      onMouseLeave={() => setActive(null)}
      className="relative rounded-full border bg-black border-white/[0.2] shadow-input max-w-[300px] mx-auto flex justify-center space-x-4 px-8 py-4 ">
      {children}
    </motion.nav>
    </AnimatePresence>)
  );
};

export const ProductItem = ({
  title,
  description,
  href,
}) => {
  return (
    (<a
      onClick={(e) => {
        e.preventDefault();
        document.getElementById(href)?.scrollIntoView({ behavior: 'smooth' });
      }}
    className="flex justify-center gap-3 items-start flex-col space-x-2">
      <div>
        <h4 className="text-xl font-bold mb-1 text-white">
          {title}
        </h4>
        <p className=" text-sm max-w-[10rem] text-neutral-300">
          {description}
        </p>
      </div>
    </a>)
  );
};

export const HoveredLink = ({
  children,
  href,
  ...rest
}) => {
  return (
    (<a
      onClick={(e) => {
        e.preventDefault();
          document.getElementById(href).scrollIntoView({ behavior: 'smooth' });
      }}
      {...rest}
      className="text-neutral-200 hover:text-neutral-500 ">
      {children}
    </a>)
  );
};
