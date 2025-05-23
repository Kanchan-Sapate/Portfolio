import React from "react";
function Experiance() {
  const cardItem = [
    { id: 1, logo: "/html.png", name: "HTML" },
    { id: 2, logo: "/css.jpg", name: "CSS" },
    { id: 3, logo: "/javascript.png", name: "JavaScript" },
    { id: 4, logo: "/reactjs.png", name: "React" },
    { id: 5, logo: "/express.png", name: "Express" },
    { id: 6, logo: "/mongodb.jpg", name: "MongoDB" },
    { id: 7, logo: "/bootstrap.png", name: "Bootstrap" },
    { id: 8, logo: "/tailwynd.png", name: "TailwindCSS" },
    { id: 9, logo: "/git.png", name: "Git" },
    { id: 10, logo: "/figmaaa.png", name: "Figma" },
    { id: 11, logo: "/firebase.png", name: "Firebase" },
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
