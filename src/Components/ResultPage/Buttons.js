import React from "react";
const buttonArr = [
  "Forest",
  "Mountain",
  "River",
  "Sunshine",
  "Lake",
  "Tree",
  "Computer",
  "TechHub",
  "CodeCraft",
  "DigitalBreeze",
  "OceanView",
  "WaveTech",
  "NatureHub",
  "EcoTech",
  "GreenSpace",
  "TechVista",
  "SunTech",
  "OceanTech",
  "MountainCode",
  "EcoOcean",
];

const Buttons = () => {
  return (
    <div className="flex overflow-hidden hover:overflow-x-scroll py-3 px-4 bg-[#F5F5F5] absolute w-full">
      {buttonArr.map((name) => (
        <div className="mr-8 bg-[#F5F5F5] p-2 px-8 text-black border rounded-md border-black">
          {name}
        </div>
      ))}
    </div>
  );
};

export default Buttons;
