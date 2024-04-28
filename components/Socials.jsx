"use client";
import {
  RiFacebookBoxFill,
  RiGithubFill,
  RiLinkedinFill,
  RiTelegramFill,
  RiInstagramFill,
} from "react-icons/ri";
import { MdEmail } from "react-icons/md";

import Link from "next/link";

const icons = [
  {
    path: "https://linkedin.com/in/mahsa-ao-102625143",
    name: <RiLinkedinFill />,
  },
  {
    path: "mailto:mahsa.alizolfii2@gmail.com",
    name: <MdEmail />,
   
  },
  {
    path: "https://github.com/azmahsa",
    name: <RiGithubFill />,
  },
  {
    path: "/",
    name: <RiFacebookBoxFill />,
  },
  {
    path: "https://t.me/azmhsa",
    name: <RiTelegramFill />,
  },
  {
    path: "https://www.instagram.com/azmahsaa/",
    name: <RiInstagramFill />,
  },
];
const Socials = ({containerStyle, iconStyle}) => {
  return (
    <div className={`${containerStyle}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconStyle}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
