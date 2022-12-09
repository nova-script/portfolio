import "./styles.css";

/* Icons */
import { AiOutlineHome } from "react-icons/ai";
import { GiButterflyFlower } from "react-icons/gi";
import logo from "../../assets/img/logo2.png";

/* React Router Dom */
import { Link } from "react-router-dom";

import projectIcon from "./img/projectIcon.png";
import blossomIcon from "./img/blossom2a.png";

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
      <div className="header flex items-center mt-5 gap-2 justify-center">
        <img src={blossomIcon} width={40} />
        <h1 className="navbar-h1">Novascript</h1>
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
            to="/curriculum"
            className={
              `flex items-center gap-5 my-8 p-2 ` +
              (currentPath === "/curriculum" ? "active" : "")
            }
          >
            <div className="icon-box">
              <IoBriefcase color="#e57d90" size={20} />
            </div>
            <span>CURRICULUM</span>
          </Link>
        </li>
      </ul>

      <div>
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
