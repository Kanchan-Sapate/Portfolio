import React from "react";
import restaurant from "../../public/FlavorFusion.png";
import chess from "../../public/ecommerce.png";
import gesture from "../../public/hospital.png";

function PortFolio() {
  const projects = [
    {
      id: 1,
      image: restaurant,
      title: "Restaurant Website",
      description:
        '"A responsive website for restaurant menu browsing, table reservations, and customer reviews."',
      explore: "https://github.com/Kanchan-Sapate/flavor-fusion",
    },
    {
      id: 2,
      image: chess,
      title: "Ecommerce Website",
      description:
        '"A modern e-commerce site with product listings, promotions, and a user-friendly shopping interface."',
      explore: "https://github.com/Kanchan-Sapate/Ecommerce-Website",
    },
    {
      id: 3,
      image: gesture,
      title: "Hospital Management Website",
      description:
       '"A web app to manage appointments, patient records, and hospital staff with a clean, efficient UI."',
      explore: "https://github.com/Kanchan-Sapate/Hospital-Management",
    },
  ];

  return (
    <div className=" text-white py-16 px-4 md:px-20">
      <div className="max-w-screen-2xl mx-auto">
        <h1 className="text-4xl text-black font-bold text-center mb-6">Projects</h1>
        <div className="flex flex-wrap justify-center gap-8">
          {projects.map(({ id, image, title, description, explore }) => (
            <div
              key={id}
              className="bg-[#1c2433] rounded-lg overflow-hidden shadow-lg max-w-xs transition-transform hover:-translate-y-2"
            >
              <img src={image} alt={title} className="w-full h-48 object-cover" />
              <div className="p-6 flex flex-col justify-between h-[280px]">
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <p className="text-gray-300 text-sm mb-4">{description}</p>
                <a
                  href={explore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline text-lg font-medium"
                >
                  Explore →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
