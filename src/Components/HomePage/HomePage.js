import React, { useEffect, useState } from "react";
import Header from "./Header";
import searchIcon from "../../Assets/searchIcon.png";
import { useDispatch, useSelector } from "react-redux";
import { addText } from "../../Utils/appSlice";
import { useFetchImages } from "../CustomHooks/useFetchImages";

const HomePage = () => {
  const [text, setText] = useState("");
  const imageData = useFetchImages();
  const dispatch = useDispatch();
  const textData = useSelector((store) => store.myStore.searchText);
  const key = process.env.REACT_APP_API_KEY;

  function handleClick() {
    dispatch(addText(text));
    setText("");
  }
  useEffect(() => {
    textData && imageData(key, textData);
    // eslint-disable-next-line
  }, [textData]);

  return (
    <div className="homePage ">
      <Header />
      <div className={"someText flex justify-center " + (textData && "hidden")}>
        <p className=" font-bold text-4xl text-center py-2 mb-3 px-2 sm-max450:text-3xl sm-max450:w-full ">
          Discover over 2,000,000 free Stock Images
        </p>
      </div>
      <div className="search flex justify-center">
        <div className="w-2/3 px-5 bg-zinc-300 bg-opacity-10 rounded-[8.91px] shadow-inner backdrop-blur-[50.07px] flex justify-between items-center sm-max450:w-[90%]  ">
          <div className="flex">
            <img src={searchIcon} alt="searchIcon" />
            <p>&nbsp;&nbsp;│</p>
          </div>
          <input
            value={text}
            className="w-[90%] py-3 px-2 focus:outline-none text-white bg-transparent "
            placeholder="Search"
            onChange={(e) => setText(e.target.value)}
            onKeyPress={(e) => (e.key === "Enter" ? handleClick() : null)}
          />

          <button
            className="font-semibold border-2 border-white px-3 rounded-md hover:bg-white hover:text-black transition duration-300 ease-in-out"
            onClick={handleClick}
          >
            GO!
          </button>
        </div>
      </div>
      {textData ? (
        <div className={"someText flex justify-center "}>
          <p className=" font-bold text-3xl w-9/12 text-center py-6 my-4">
            Results: {textData.charAt(0).toUpperCase() + textData.slice(1)}
          </p>
        </div>
      ) : (
        <div className="py-1 px-2 text-sm my-4 w-52 m-auto rounded-sm backdrop-blur-sm ring ring-[#8E8CA3] font-semibold">
          <p className="text-center">Trending: flowers, forest, river</p>
        </div>
      )}
    </div>
  );
};

export default HomePage;
