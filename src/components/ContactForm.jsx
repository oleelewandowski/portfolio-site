import React from "react";
import { BiMailSend } from "react-icons/bi";

const ContactForm = () => {
  return (
    <div
      name="contact"
      className="h-screen w-full text-white bg-gradient-to-b from-black via-black to-gray-900"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full md:h-full px-3">
        <div className="font-bold uppercase text-2xl sm:text-3xl py-3">
          <p className="mt-10"> Contact </p>
        </div>
        <p className="text-xl">
          If u want to get in touch with me, please do not hesitate to send me a
          message:
        </p>
        <div className="flex justify-center items-center py-12">
          <form
            action="https://getform.io/f/cc75b5fe-8059-4f27-a430-325850eeff22"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name..."
                className="p-3 w-full bg-transparent border-2 rounded-md text-white focus:outline-none my-3"
              />
            </label>
            <label>
              <input
                type="text"
                name="email"
                placeholder="Enter your e-mail address..."
                className="p-3 w-full bg-transparent border-2 rounded-md text-white focus:outline-none my-3"
              />
            </label>
            <label>
              <textarea
                name="message"
                rows="10"
                className="p-3 w-full bg-transparent border-2 rounded-md text-white focus:outline-none mt-3 mb-6"
                placeholder="Enter your message here..."
              ></textarea>
            </label>
            <button className="text-white w-fit px-4 py-2 flex items-center mx-auto rounded-xl bg-orange-500 bg-orange group border-2 ">
              <span className="font-bold uppercase">send a message </span>
              <span className="group-hover:rotate-90 duration-200">
                <BiMailSend size={22} className="ml-1" />
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
