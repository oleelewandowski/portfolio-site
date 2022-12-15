import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Socials = () => {
  const iconsSize = 35;
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
      content: <BsFillPersonLinesFill size={iconsSize} />,
      name: "CV",
      href: `https://https://www.linkedin.com/in/oleelewandowski/`,
    },
  ];
  return (
    <div>
      <ul className="flex flex-row gap-3 mb-7">
        {socials.map(({ id, content, name, href }) => (
          <li key={id} className="hover:scale-110 duration-200">
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
