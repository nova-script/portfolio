import "./styles.css";

/* Icons */
import { AiOutlineHome } from "react-icons/ai";
import { GiButterflyFlower } from "react-icons/gi";

/* React Router Dom */
import { Link } from "react-router-dom";

/* Icons */
import { HiBars3 } from "react-icons/hi2";
import { IoHome, IoBriefcase } from "react-icons/io5";
import { BsTwitter, BsGithub } from "react-icons/bs";
import { FaDev } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { RiSlideshow2Fill } from "react-icons/ri";

import projectIcon from "./img/projectIcon.png";
import blossomIcon from "./img/blossom2a.png";
import logo from "./img/logo.png";

/* Recoil */
import { useRecoilState } from "recoil";
import { currentPathAtom } from "../../App";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [currentPath, setCurrentPath] = useRecoilState(currentPathAtom);

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="header">
        <div className="flex items-center mt-5 gap-2 justify-center">
          <img src={logo} width="90%" />
        </div>
      </div>
      <button onClick={(e) => setIsNavbarOpen(!isNavbarOpen)}>
        {isNavbarOpen ? (
          <AiOutlineClose className="lg:hidden" size={40} color="white" />
        ) : (
          <HiBars3 className="lg:hidden" size={40} color="white" />
        )}
      </button>

      <div className={`navigation ${isNavbarOpen ? "show" : "close"}`}>
        <ul className="px-5 lg:mt-[50px] pb-[100px]">
          <li>
            <Link
              onClick={(e) => setIsNavbarOpen(!isNavbarOpen)}
              to="/"
              className={
                `flex items-center gap-5 my-8 p-2 ` +
                (currentPath === "/" ? "active" : "")
              }
            >
              <div className="icon-box">
                <IoHome color="#e57d90" size={20} />
              </div>
              <span>HOME</span>
            </Link>
          </li>

          <li>
            <Link
              onClick={(e) => setIsNavbarOpen(!isNavbarOpen)}
              to="/projects"
              className={
                `flex items-center gap-5 my-8 p-2 ` +
                (currentPath === "/projects" ? "active" : "")
              }
            >
              <div className="icon-box">
                <RiSlideshow2Fill color="#e57d90" size={20} />
              </div>
              <span>PROJECTS</span>
            </Link>
          </li>

          <li>
            <Link
              onClick={(e) => setIsNavbarOpen(!isNavbarOpen)}
              to="/resume"
              className={
                `flex items-center gap-5 my-8 p-2 ` +
                (currentPath === "/resume" ? "active" : "")
              }
            >
              <div className="icon-box">
                <IoBriefcase color="#e57d90" size={20} />
              </div>
              <span>RESUME</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className={`subheading-social ${isNavbarOpen ? "show" : "close"}`}>
        <div className="text-center mb-5">
          <p className="text-soft-white navbar-subheading">
            DO YOU HAVE A DREAM?
            <br />
            LET ME CODE IT.
          </p>
        </div>
        <div className="line mx-7" />
        <div className="social-media flex gap-3 my-5 justify-center">
          <a href="https://twitter.com/novatsx" target="_blank">
            <BsTwitter color="white" size={20} />
          </a>
          <a href="https://github.com/nova-script" target="_blank">
            <BsGithub color="white" size={20} />
          </a>
          <a href="https://dev.to/novascript" target="_blank">
            <FaDev color="white" size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
}
