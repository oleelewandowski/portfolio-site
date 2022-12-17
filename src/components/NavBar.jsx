import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import oleeLogo from "../assets/oleeLogo.svg";
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
      linkName: "experience",
    },
    {
      id: 4,
      linkName: "portfolio",
    },
    {
      id: 5,
      linkName: "contact",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 fixed px-4 text-white bg-black animate-fade-in">
      <div className="flex flex-row gap-2 flex-grow">
        <img className="w-max h-max" src={oleeLogo} alt="olee logo"></img>
        <button></button>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, linkName }) => (
          <li
            className="px-4 cursor-pointer font-medium uppercase text-white hover:scale-110 duration-150"
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
        <>
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black via-black to-gray-900">
            {links.map(({ id, linkName }) => (
              <li
                className="px-4 cursor-pointer text-4xl py-4 text-white hover:scale-110 duration-150 uppercase"
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
        </>
      )}
    </div>
  );
};

export default NavBar;
