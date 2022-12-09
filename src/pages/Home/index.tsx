import { useEffect } from "react";

import PinkButton from "../../components/_shared/PinkButton";
import profilePicture from "./img/Euzito.jfif";

import "./styles.css";

/* Animated Routes */
import { motion } from "framer-motion";

/* Recoil */
import { useRecoilState } from "recoil";
import { currentPathAtom } from "../../App";

export default function Home() {
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
      className="home pl-10 pt-[90px]"
    >
      <div className="pl-10 mt-[15px]">
        <img src={profilePicture} width={300} className="profile-picture" />
        <div className="flex items-center gap-10">
          <div className="flex mt-5 items-center gap-5 mb-[25px]">
            <div>
              <h1 className="leading-none">Novascript,</h1>
              <h2 className="leading-none">Full-stack developer.</h2>
              <p className="max-w-[650px] mt-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <PinkButton title="Discover my projects" className="mt-10" />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
