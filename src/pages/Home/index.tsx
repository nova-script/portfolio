import PinkButton from "../../components/_shared/PinkButton";
import profilePicture from "./img/Euzito.jfif";

import "./styles.css";

export default function Home() {
  return (
    <section className="home pl-10 pt-[90px] ">
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
    </section>
  );
}
