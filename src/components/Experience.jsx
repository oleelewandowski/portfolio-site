import React from "react";
import reactIcon from "../assets/react.png";
import htmlIcon from "../assets/html.png";
import githubIcon from "../assets/github.png";
import javascriptIcon from "../assets/javascript.png";
import cssIcon from "../assets/css.png";
import graphqlIcon from "../assets/graphql.png";
import reduxIcon from "../assets/redux.svg";

const Experience = () => {
  const skills = [
    {
      id: 1,
      source: reactIcon,
      name: "React",
      style: "shadow-blue-500",
    },
    {
      id: 2,
      source: reduxIcon,
      name: "Redux",
      style: "shadow-purple-600",
    },
    {
      id: 3,
      source: graphqlIcon,
      name: "GraphQL",
      style: "shadow-pink-400",
    },
    {
      id: 4,
      source: javascriptIcon,
      name: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 5,
      source: githubIcon,
      name: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 6,
      source: htmlIcon,
      name: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 7,
      source: cssIcon,
      name: "CSS",
      style: "shadow-blue-600",
    },
  ];
  return (
    <div
      name="experience"
      className="h-screen w-full text-white bg-gradient-to-b from-gray-900 via-black to-black"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full md:h-full px-3">
        <div className="font-bold uppercase text-2xl sm:text-3xl py-3">
          <p className="mt-10"> Experience </p>
        </div>
        <p className="text-xl">Technologies I've worked with:</p>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-6 text-center py-8 px-12 sm:px-0">
          {skills.map(({ id, source, name, style }) => (
            <div
              key={id}
              className={`shadow-lg hover:scale-105 duration-300 py-2 rounded-lg ${style}`}
            >
              <img src={source} alt={`${name} icon`} className="w-20 mx-auto" />
              <p className="mt-4">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
