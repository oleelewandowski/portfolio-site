import React from "react";
import oleeLogo from "../assets/oleeLogo.svg";
import Socials from "./Socials.jsx";

const Footer = () => {
  return (
    <div className="w-full text-white bg-black">
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center px-3">
        <footer className="h-3/4">
          <div className="flex items-center justify-between my-3">
            <div className="flex flex-wrap items-center text-md flex-row">
              {/* <img className="w-max h-max" src={oleeLogo} alt="logo olee"></img> */}
            </div>
            <div className="flex justify-end">
              <Socials size={25} />
            </div>
          </div>
          <hr className=" border-white mx-auto mb-6" />
          <div className="text-white flex justify-center items-center">
            <span className="mb-6">© 2023 oLee™. All Rights Reserved.</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
