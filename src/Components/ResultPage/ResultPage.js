import React from "react";
import { useSelector } from "react-redux";
import Buttons from "./Buttons";

const ResultPage = () => {
  const result = useSelector((store) => store.myStore.allImageData);
  console.log(result);
  if (!result) return;
  return (
    <div className="ResultPage bg-pink-400">
      <div>
        <Buttons />
      </div>
      <div className="py-4 flex mx-4 justify-center flex-wrap">
        {result.map((img) => (
          <img src={img.largeImageURL} alt="myImage" key={img.id} className="w-[20rem] mr-10 my-4 rounded-lg"/>
        ))}
      </div>
    </div>
  );
};

export default ResultPage;
