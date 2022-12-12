import { useEffect } from "react";

import PinkButton from "../../components/_shared/PinkButton";
import profilePicture from "./img/Euzito.jfif";

import "./styles.css";

/* Animated Routes */
import { motion } from "framer-motion";

/* Recoil */
import { useRecoilState } from "recoil";
import { currentPathAtom } from "../../App";
import WhiteButton from "../../components/_shared/WhiteButton";
import { Link } from "react-router-dom";

export default function Home() {
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
      className="home lg:pl-10 pt-[90px]"
    >
      <div className="md:pl-10 mt-[15px]">
        <div className="flex justify-center md:justify-start ">
          <img src={profilePicture} width={300} className="profile-picture" />
        </div>

        <div className="px-5 text-en flex items-center gap-10">
          <div className="mt-5 items-center gap-5 mb-[25px]">
            <div>
              <h1 className="leading-none">Nova Fernandes,</h1>
              <h2 className="leading-none">Full-stack developer.</h2>
              <p className="max-w-[650px] mt-10">
                I produce elegant, performant and accessible websites.
                <br />
                <strong> I'm absolutely in love with coding</strong>, mainly
                working around <strong> React, Express and Django.</strong>
                <br />
                <br />
                I'm 22 years old and currently living in Brasília - Brazil.
              </p>
              <div className="flex gap-5">
                <Link to="/projects" className="mt-10 pink-button">
                  Discover my projects
                </Link>
                <Link to="/resume" className="mt-10 white-button">
                  HIRE ME
                </Link>
              </div>
            </div>
            <hr className="my-8" />
            <div className="mb-10">
              <h2>Know a little more about me:</h2>

              <div className="pl-0 md:pl-8">
                <h3 className="mt-5">&#x2022; What are my pronouns?</h3>

                <p className="max-w-[650px] mt-5 text-justify">
                  I am <strong>non-binary</strong>, and my pronouns are
                  <strong> He/She/They.</strong>
                  <br />
                  You can use any! 😊
                </p>
              </div>

              <div className="pl-0 md:pl-8">
                <h3 className="mt-5">&#x2022; Why "NovaScript"?</h3>
                <p className="max-w-[650px] mt-5 text-justify">
                  <strong>NovaScript</strong> is a combination of
                  <strong> "Nova"</strong> (my first name) and{" "}
                  <strong>"Script"</strong> from JavaScript (my preferred
                  programming language).
                </p>
              </div>

              <div className="pl-0 md:pl-8">
                <h3 className="mt-5">&#x2022; What are you hobbies?</h3>

                <p className="max-w-[650px] mt-5 text-justify">
                  My main hobbies are playing video-games, exercising, reading
                  philosophy books and listening to podcasts!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
