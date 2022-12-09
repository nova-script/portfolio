/* Animated Routes */
import { motion } from "framer-motion";
import { useEffect } from "react";

/* Recoil */
import { useRecoilState } from "recoil";
import { currentPathAtom } from "../../App";

/* Projects */
import projects from "./projects";

interface Project {
  title: string;
  description: string;
  image: string;
  url: string;
  hasSourceCode: boolean;
  sourceCode?: string;
}

function renderProjects() {
  return projects.map((project: Project) => {
    return (
      <div className="project-box my-10">
        <img className="col-span-5" width="100%" src={project.image} />
        <div className="overlay">
          <h1> teste </h1>
          <p> xampson </p>
        </div>
      </div>
    );
  });
}

export default function Projects() {
  const [currentPath, setCurrentPath] = useRecoilState(currentPathAtom);

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}
      className="projects pl-10 pt-[90px]"
    >
      <div className="container mx-auto max-w-[1024px]">
        <div>
          <h1 className="leading-1">Websites Everywhere!</h1>
          <h2 className="leading-none">Some examples of my work! :)</h2>
          <hr className="mt-5" />
          <p className="mt-10 text-justify">
            As you should know by now, I'm a
            <strong> open source enthusiast</strong>. Thus, the source code for
            each one of my projects are available, so you can read, modify or
            use it on your own projects! The only exceptions are for private
            projects, for I'm not allowed to share their code with you... 😔
            <br />
          </p>
        </div>
        <div className="mt-10">{renderProjects()}</div>
      </div>
    </motion.section>
  );
}
