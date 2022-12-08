import "./styles.css";

/* Icons */
import { AiOutlineHome } from "react-icons/ai";
import { GiButterflyFlower } from "react-icons/gi";
import logo from "../../assets/img/logo2.png";

import projectIcon from "./img/projectIcon.png";
import blossomIcon from "./img/blossom2.png";

import { IoHome, IoBriefcase } from "react-icons/io5";

import { BsTwitter, BsGithub } from "react-icons/bs";
import { FaDev } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="header flex items-center mt-5 gap-2 justify-center">
        <h1 className="navbar-h1">Novascript</h1>
      </div>

      <ul className="px-5 mt-[50px] pb-[100px]">
        <li className="flex items-center gap-5 my-8 active p-2">
          <div className="icon-box">
            <IoHome color="#e57d90" size={20} />
          </div>
          <span>HOME</span>
        </li>

        <li className="flex items-center gap-5 my-8 p-2 ">
          <div className="icon-box">
            <img src={projectIcon} width={20} />
          </div>
          <span>PROJECTS</span>
        </li>

        <li className="flex items-center gap-5 my-8 p-2 ">
          <div className="icon-box">
            <IoBriefcase color="#e57d90" size={20} />
          </div>
          <span>CURRICULUM</span>
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
