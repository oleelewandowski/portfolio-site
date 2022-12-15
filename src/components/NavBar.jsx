import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-scroll";
import "../index.css";

const NavBar = () => {
  const [isSpreaded, setIsSpreaded] = useState(false);
  const links = [
    {
      id: 1,
      linkName: "home",
    },
    {
      id: 2,
      linkName: "about",
    },
    {
      id: 3,
      linkName: "portfolio",
    },
    {
      id: 4,
      linkName: "experience",
    },
    {
      id: 5,
      linkName: "contact",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 fixed px-4 text-white  bg-black">
      <div className="flex flex-row gap-2 flex-grow">
        <h1 className="text-5xl font-logo ml-2">oLee </h1>
        <span>
          <AiOutlineStar color="rgb(249 115 22)" />
        </span>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, linkName }) => (
          <li
            className="px-4 cursor-pointer font-medium capitalize text-white hover:scale-110 duration-150"
            key={id}
          >
            <Link to={linkName} smooth duration={500} activeClass="active" spy>
              {linkName}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setIsSpreaded(!isSpreaded)}
        className="cursor-pointer px-4 z-10 text-white md:hidden"
      >
        {isSpreaded ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>
      {isSpreaded && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black via-black to-gray-900">
          {links.map(({ id, linkName }) => (
            <li
              className="px-4 cursor-pointer text-4xl py-4 capitalize text-white hover:scale-110 duration-150"
              key={id}
            >
              <Link
                to={linkName}
                smooth
                duration={500}
                activeClass="active"
                spy
                onClick={() => setIsSpreaded(!isSpreaded)}
              >
                {linkName}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
