import React from "react";
import html from "../../public/html.png";
import css from "../../public/express.png";
import java from "../../public/reactjs.png";
import javascript from "../../public/javascript.png";
import oracle from "../../public/html.png";
import spring from "../../public/css.jpg";
import BootStrap from "../../public/BootStrap_logo.svg";
import TailwyndCSS from "../../public/tailwynd.png";
import Git from "../../public/git.png";
import Figma from "../../public/figmaaa.png";
import Firebase from "../../public/firebase.png";
import springBoot from "../../public/java.png";
function Experiance() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "MongoDB",
    },
    {
      id: 2,
      logo: css,
      name: "Express",
    },
    {
      id: 3,
      logo: java,
      name: "React",
    },
    {
      id: 4,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 5,
      logo: oracle,
      name: "HTML",
    },
    {
      id: 6,
      logo: spring,
      name: "CSS",
    },
    {
      id: 7,
      logo: BootStrap,
      name: "BootStrap",
    },
    {
      id: 7,
      logo: TailwyndCSS,
      name: "TailwyndCSS",
    },
    {
      id: 7,
      logo: Git,
      name: "Git",
    },
    {
      id: 7,
      logo: Figma,
      name: "Figma",
    },
    {
      id: 7,
      logo: Firebase,
      name: "Firebase",
    },
  ];
  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Skills</h1>
        <p className="  ">
          I'm a Fresher and Familiar with this Technologies and Foundational Knowledge of Full-stack Web Development.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
