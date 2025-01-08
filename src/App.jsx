import { lazy, Suspense } from 'react';
import LoadingComponent from "./Components/LoadingComponent";

const Nav = lazy(() => import('./Components/Nav'));
const Home = lazy(() => import('./Components/Home'));
const About = lazy(() => import('./Components/About'));
const Skills = lazy(() => import('./Components/Skills'));
const Projects = lazy(() => import('./Components/Projects'));
const Contact = lazy(() => import('./Components/Contact'));

import Stars from "./Components/Stars";



function App() {
  return (

      <div className='bg-black text-white overflow-x-hidden w-full relative'>
        <Stars></Stars>
        <div className="relative z-[1]">
          <Suspense fallback={<LoadingComponent />}>
            <Nav />
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </Suspense>
        </div>
      </div>
  );
}
export default App;