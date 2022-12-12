/* Animated Routes */
import { motion } from "framer-motion";
import { useEffect } from "react";

/* Recoil */
import { useRecoilState } from "recoil";
import { currentPathAtom } from "../../App";

import "./styles.css";

/* Icons */
import { BiLinkExternal, BiCodeBlock } from "react-icons/bi";

/* Projects */
import projects from "./projects";

interface Project {
  title: string;
  description: string;
  image: string;
  url: string;
  technologyStack: Array<string>;
  hasSourceCode: boolean;
  sourceCode?: string;
  finishDate: string;
}

function renderProjects() {
  function renderCoreStack(technologyStack: Array<string>) {
    return technologyStack.map((technology: string) => {
      return <span className="technology-stack-badge">{technology}</span>;
    });
  }

  return projects.map((project: Project) => {
    return (
      <div className="project-box-wrapper col-span-10 md:col-span-5 mb-5">
        <div className="project-box p-3 pb-0 h-[100%]">
          <div className="img-wrapper">
            <img width="100%" src={project.image} />
            <div className="img-overlay"></div>
          </div>

          <div className="overlay p-5 flex flex-col">
            <div>
              <a className="mb-10" href={project.url} target="_blank">
                <h3 className="flex items-center gap-2">
                  {project.title}
                  <BiLinkExternal size={20} className="mt-1" color="gray" />
                </h3>
              </a>
              <div>
                {project.hasSourceCode ? (
                  <a
                    className="source-code"
                    href={project.sourceCode}
                    target="_blank"
                  >
                    <small className="flex gap-3 text-[15px] items-center">
                      READ SOURCE CODE <BiCodeBlock color="gray" size={15} />
                    </small>
                  </a>
                ) : (
                  <div className="mt-6"></div>
                )}
              </div>
            </div>

            <p className="mt-5 text-justify">{project.description}</p>
            <hr className="mt-3" />
            <div className="my-3">
              <h4 className="mb-2">Core stack:</h4>
              <div className="">{renderCoreStack(project.technologyStack)}</div>
            </div>

            <div className="text-right mt-5">
              <small className="mt-5 text-[16px]">{project.finishDate}</small>
            </div>
          </div>
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}
      className="projects px-5 lg:pl-10 pt-[90px]"
    >
      <div className="container lg:max-w-[768px] xl:max-w-[1024px]">
        <div className="pb-10">
          <h1 className="leading-none text-[50px] md:text[70px]">
            Websites Everywhere!
          </h1>
          <h2 className="leading-none mt-3 text-[28px] md:text[40px]">
            Some examples of my work! :)
          </h2>
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
        <div className="grid grid-cols-10 md:gap-5 mt-10">
          {renderProjects()}
        </div>
      </div>
    </motion.section>
  );
}
