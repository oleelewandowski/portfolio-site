import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Socials = (props) => {
  const iconsSize = props.size;
  const socials = [
    {
      id: 1,
      content: <FaLinkedin size={iconsSize} />,
      name: "LinkedIn",
      href: `https://www.linkedin.com/in/oleelewandowski`,
    },
    {
      id: 2,
      content: <FaGithub size={iconsSize} />,
      name: "GitHub",
      href: `https://github.com/oleelewandowski`,
    },
    {
      id: 3,
      content: <FaTwitter size={iconsSize} />,
      name: "Twitter",
      href: `https://twitter.com/oleelewandowski`,
    },
    {
      id: 4,
      content: <BsFillPersonLinesFill size={iconsSize} />,
      name: "CV",
      href: `https://www.linkedin.com/in/oleelewandowski`,
    },
  ];
  return (
    <div className="flex mt-4 space-x-6 justify-center m-3">
      <ul className="flex flex-row gap-3">
        {socials.map(({ id, content, name, href }) => (
          <li key={id} className="hover:scale-105 duration-200">
            <a href={href} alt={name} target="_blank" rel="noopener noreferrer">
              {content}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
