import "./styles.css";

/* Icons */
import { AiOutlineHome } from "react-icons/ai";
import { GiButterflyFlower } from "react-icons/gi";

/* React Router Dom */
import { Link } from "react-router-dom";

import projectIcon from "./img/projectIcon.png";
import blossomIcon from "./img/blossom2a.png";
import logo from "./img/logo.png";

import { IoHome, IoBriefcase } from "react-icons/io5";

import { BsTwitter, BsGithub } from "react-icons/bs";
import { FaDev } from "react-icons/fa";

/* Recoil */
import { useRecoilState } from "recoil";
import { currentPathAtom } from "../../App";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [currentPath, setCurrentPath] = useRecoilState(currentPathAtom);

  return (
    <nav className="navbar">
      <div className="header">
        <div className="flex items-center mt-5 gap-2 justify-center">
          <img src={logo} width="90%" />
        </div>
      </div>

      <ul className="px-5 mt-[50px] pb-[100px]">
        <li>
          <Link
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
            to="/projects"
            className={
              `flex items-center gap-5 my-8 p-2 ` +
              (currentPath === "/projects" ? "active" : "")
            }
          >
            <div className="icon-box">
              <img src={projectIcon} width={20} />
            </div>
            <span>PROJECTS</span>
          </Link>
        </li>

        <li>
          <Link
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

      <div>
        <div className="text-center mb-5">
          <p className="text-soft-white navbar-subheading">
            DO YOU HAVE A DREAM?
            <br />
            LET ME CODE IT.
          </p>
        </div>
        <div className="line mx-7" />
        <div className="social-media flex gap-3 my-5 justify-center">
          <a>
            <BsTwitter color="white" size={20} />
          </a>
          <a>
            <BsGithub color="white" size={20} />
          </a>
          <a>
            <FaDev color="white" size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
}
