import React from "react";
import oliverProfile from "../assets/oliverProfile.png";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black to bg-gray-900"
    >
      <div className="max-w-screen-lg mx-auto text-white flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col w-4/5 px-4 justify-center">
          <h3> Hi, I'm Oliver </h3>
          <h2> Junior Frontend Developer</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
            cupiditate voluptatibus, quis culpa impedit doloremque. Nostrum
            suscipit dicta fuga pariatur perferendis, sequi veniam tenetur
            praesentium, maxime at dolores nam fugit?
          </p>
        </div>
        <div>
          <img
            className="rounded-full mx-auto md:full px-2"
            src={oliverProfile}
            alt="my profile face"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
