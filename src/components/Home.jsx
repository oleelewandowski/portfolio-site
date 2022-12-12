import React from "react";
import oliverProfile from "../assets/oliverProfile.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import Socials from "./Socials";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to bg-gray-900"
    >
      <div className="max-w-screen-lg mx-auto text-white flex flex-col items-center justify-center h-full px-3">
        <div className="flex flex-col justify-center h-full md:flex-row">
          <div className="flex flex-col w-3/5 px-4 justify-center h-full">
            <h3 className="uppercase text-2xl sm:text-3xl py-2 mt-7">
              Hi, I'm Oliver
            </h3>
            <h2 className="uppercase text-4xl md:text-6xl sm:text-5xl font-bold py-1 my-2">
              I'm a Junior Frontend Developer
            </h2>
            <p className="py-4 max-w-md upper">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
              cupiditate voluptatibus, quis culpa impedit doloremque. Nostrum
              suscipit dicta fuga pariatur perferendis, sequi veniam tenetur
              praesentium, maxime at dolores nam fugit?
            </p>
            <div>
              <button className="text-white w-fit px-4 py-2 my-2 flex items-center rounded-xl bg-orange-500 bg-orange group border-2">
                <span className="font-bold">About me</span>
                <span className="group-hover:rotate-90 duration-200">
                  <MdKeyboardArrowRight size={22} className="ml-1" />
                </span>
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-2/5">
            <div>
              <img
                className="rounded-full mx-auto md:w-full my-3"
                src={oliverProfile}
                alt="my profile face"
              />
            </div>
            <div>
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
