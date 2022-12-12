import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Socials = () => {
  const iconsSize = 25;
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
      content: <HiOutlineMail size={iconsSize} />,
      name: "E-mail",
      href: `mailto:oliver.lewandowski1@gmail.com`,
    },
    {
      id: 4,
      content: <BsFillPersonLinesFill size={iconsSize} />,
      name: "CV",
      href: `https://https://www.linkedin.com/in/oleelewandowski/`,
    },
  ];
  return (
    <div>
      <ul className="flex flex-row gap-3 mb-7">
        {socials.map(({ id, content, name, href }) => (
          <li key={id}>
            <a href={href} alt={name}>
              {content}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
