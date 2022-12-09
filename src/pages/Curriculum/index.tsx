/* Animated Routes */
import { motion } from "framer-motion";
import { useEffect } from "react";

/* Recoil */
import { useRecoilState } from "recoil";
import { currentPathAtom } from "../../App";

export default function Curriculum() {
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
      dadassssss
    </motion.section>
  );
}
