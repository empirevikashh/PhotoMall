import React from "react";
import Header from "./Header";
import searchIcon from "../../Assets/searchIcon.png";

const HomePage = () => {
  return (
    <div className="homePage ">
      <Header />
      <div className="someText flex justify-center">
        <p className=" font-bold text-5xl w-9/12 text-center py-6 my-4">
          Discover over 2,000,000 free Stock Images
        </p>
      </div>
      <div className="search flex justify-center">
        <div className="w-2/3 px-5 bg-zinc-300 bg-opacity-10 rounded-[8.91px] shadow-inner backdrop-blur-[50.07px] flex justify-between items-center">
          <div className="flex">
            <img src={searchIcon} alt="searchIcon" />
            <p>&nbsp;&nbsp;│</p>
          </div>
          <input
            type="text"
            className="w-[90%] py-3 px-2 focus:outline-none text-white bg-transparent"
            placeholder="Search"
          />

          <button className="font-semibold border-2 border-white px-3 rounded-md">
            GO!
          </button>
        </div>
      </div>
      <div className="py-1 px-2 text-sm my-4 w-1/4 m-auto rounded-sm backdrop-blur-sm ring ring-[#8E8CA3] font-semibold">
        <p className="text-center">Trending: flowers, love, forest, river</p>
      </div>
    </div>
  );
};

export default HomePage;
