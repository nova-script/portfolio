/* Animated Routes */
import { motion } from "framer-motion";
import { useEffect } from "react";

/* Recoil */
import { useRecoilState } from "recoil";
import { currentPathAtom } from "../../App";

/* Custom Components */
import Education from "./components/Education";
import ExpertiseAndSoftSkills from "./components/ExpertiseAndSoftSkills";
import ProfessionalExperience from "./components/ProfessionalExperience";
import Proficiences from "./components/Proficiences";

/* Assets */
import "./styles.css";
import profilePicture from "../Home/img/Euzito.jfif";

export default function Resume() {
  const [currentPath, setCurrentPath] = useRecoilState(currentPathAtom);

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  //useEffect(() => {
  //  window.scrollTo(0, 0);
  //}, []);

  return (
    <motion.section
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}
      className="resume pl-10 pt-[90px]"
    >
      <div className="container mx-auto w-[100%] max-w-[1024px]">
        <div className="mb-[50px] grid gap-10 grid-cols-8 items-center">
          <div className="col-span-2">
            <img src={profilePicture} className="profile-picture" />
          </div>

          <div className="col-span-6">
            <h3 className="font-medium">NOVA FERNANDES:</h3>
            <hr className="my-3 w-[100%]" />
            <div className="grid grid-cols-2">
              <div>
                <p>
                  <strong>Birthday:</strong> 02/02/2000 (22 years old)
                </p>
                <p>
                  <strong>Gender:</strong> Non-binary
                </p>
                <p>
                  <strong>Location:</strong> Brazil, Brasília
                </p>
              </div>
              <div>
                <p>
                  <strong>Email:</strong> novaisbusycoding@gmail.com
                </p>
                <p>
                  <strong>Cellphone:</strong> +55 061 985 680 433
                </p>
                <p>
                  <strong>GitHub: </strong>
                  <a target="_blank" href="https://github.com/nova-script">
                    <u>github.com/nova-script</u>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-10">
          <h3 className="font-medium">RESUME</h3>
          <hr className="my-3 w-[100%]" />
          <p>
            Experienced full-stack web developer expert in{" "}
            <strong>Python, React and Node (JavaScript/TypeScript).</strong>
            <br />
            Currently seeking for a full-time position in a challenging
            workplace.
          </p>
        </div>
        <ProfessionalExperience />
        <Education />
        <Proficiences />
        <ExpertiseAndSoftSkills />
      </div>
    </motion.section>
  );
}
