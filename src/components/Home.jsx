import React from "react";
import oliverProfile from "../assets/oliverProfile.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import Socials from "./Socials";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to bg-gray-900"
    >
      <div className="flex flex-col justify-center items-center max-w-screen-lg mx-auto px-3 text-white h-full md:flex-row">
        <div className="w-full md:w-3/5 ">
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
          <div className="flex justify-center md:justify-start">
            <Link to="about" smooth duration={500}>
              <button className="text-white w-fit px-4 py-2 my-2 flex items-center rounded-xl bg-orange-500 bg-orange group border-2">
                <span className="font-bold">About me</span>
                <span className="group-hover:rotate-90 duration-200">
                  <MdKeyboardArrowRight size={22} className="ml-1" />
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-2/5 flex flex-col justify-center items-center">
          <div>
            <img
              className="rounded-xl mx-auto w-3/5 md:w-3/4 my-3"
              src={oliverProfile}
              alt="my profile face"
            />
          </div>
          <div className="mt-1">
            <Socials />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
