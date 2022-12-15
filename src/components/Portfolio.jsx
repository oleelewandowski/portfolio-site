import React from "react";

const Portfolio = () => {
  const projects = [
    { id: 1, source: null, name: "Password generator" },
    {},
    {},
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-900 w-full text-white md:h-screen bg-gray-900"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full md:h-full px-3">
        <div className="font-bold uppercase text-2xl sm:text-3xl py-3">
          <p className="mt-10"> Portfolio </p>
        </div>
        <p className="text-xl">Projects I've made in my free time:</p>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-12 text-center py-8 px-12 sm:px-0">
          {projects.map(({ id, source, name }) => (
            <div
              key={id}
              className={`shadow-lg hover:scale-105 duration-300 py-12 rounded-lg flex flex-col border-2`}
            >
              <img
                src={source}
                alt={`${name} icon`}
                className="w-20 mx-auto hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 border-2">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 border-2">
                  Code
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
