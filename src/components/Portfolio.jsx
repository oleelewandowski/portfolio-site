import React from "react";
import randomBackground from "../assets/randomBackground.jpg";
import { BsCode } from "react-icons/bs";
import { SlMagnifier } from "react-icons/sl";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      source: randomBackground,
      githubLink: `https://github.com/oleelewandowski/portfolio-site`,
      websiteLink: null,
      name: "project_name",
    },
    {
      id: 2,
      source: randomBackground,
      githubLink: null,
      websiteLink: null,
      name: "project_name",
    },
    // {
    //   id: 3,
    //   source: randomBackground,
    //   githubLink: null,
    //   websiteLink: null,
    //   name: "project_name",
    // },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-gray-900 via-black to-black w-full text-white md:h-screen bg-gray-900 bg-scroll"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full md:h-full px-3">
        <div className="font-bold uppercase text-2xl sm:text-3xl py-3">
          <p className="mt-10"> Portfolio </p>
        </div>
        <p className="text-xl">Projects I've made in my free time:</p>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-12 text-center py-6 px-8 sm:px-0">
          {projects.map(({ id, source, githubLink, websiteLink, name }) => (
            <div key={id} className="flex flex-col border-2">
              <img
                src={source}
                alt={`${name} icon`}
                className="w-full mx-auto hover:shadow-lg"
              />
              <div className="flex items-center justify-center border-t-2">
                <button className="w-1/2 py-2 flex items-center justify-center hover:scale-125 duration-200 ">
                  <a
                    href={websiteLink}
                    alt={name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SlMagnifier size={25} />
                  </a>
                </button>
                <button className="w-1/2 py-2 flex items-center justify-center hover:scale-125 duration-200">
                  <a
                    href={githubLink}
                    alt={name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsCode size={25} />
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
