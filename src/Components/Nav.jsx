import  { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "../lib/util";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import projects from "./constants"

export default function Nav() {

  const [logoActive, setLogoActive] = useState(false);
  const [logoDisabled, setLogoDisabled] = useState(false);

  const { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, "change", (current) => {

    if(current < 0.1) {
      setLogoDisabled(false);
    }
    if(current>0.16){
        setLogoActive(true);
        setLogoDisabled(true);
    }
    else{
      setLogoActive(false);
    }
  })

  return (
    (<div className="relative w-full flex font-semibold bg-black text-white items-center justify-center">

      <motion.h1
      animate={logoActive ?
        { y: 0, opacity: 1 } :
        { y: -40, opacity: 0 }
      }
      transition={{
        duration: 0.2
      }}
      className={` ${logoDisabled? 'fixed': 'hidden' } font-extrabold font-montez tracking-wider text-2xl z-50 fixed top-2 left-5`}>
        Jeevintha
      </motion.h1>

      <Navbar className="top-2" />
    </div>)
  );
}
function Navbar({ className }) {
  const [active, setActive] = useState(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 w-screen flex justify-center z-50", className)}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="home">Top</HoveredLink>
            <HoveredLink href="about">About</HoveredLink>
            <HoveredLink href="skills">Skills</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Projects" href="projects">
          <div className="text-sm grid grid-cols-2 gap-5 p-4">
            {
              projects.map((project, index) => (
                <ProductItem
                  key={index}
                  title={project.title}
                  href={project.href}
                  description={project.shortDescription}
                />
              ))
            }
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact" href="contact">
          <div className="flex flex-col space-y-4 items-center text-sm">
            <HoveredLink 
              href="https://github.com/Jeevintha" 
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </HoveredLink>
            <HoveredLink 
              href="mailto:jeevithajeevi6234@gmail.com"
              rel="noopener noreferrer"
            >
              E-mail
            </HoveredLink>
            <HoveredLink 
              href="https://www.linkedin.com/in/jeevintha-m-959677295/" 
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
