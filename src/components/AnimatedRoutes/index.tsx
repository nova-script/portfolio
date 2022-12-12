/* React Router */
import { Routes, Route, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

/* Custom Components */
import Projects from "../../pages/Projects";
import Home from "../../pages/Home";
import Curriculum from "../../pages/Resume";
import Resume from "../../pages/Resume";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
