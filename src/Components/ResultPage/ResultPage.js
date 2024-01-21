import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Buttons from "./Buttons";
import { addDetailImage } from "../../Utils/appSlice";

const ResultPage = () => {
  const result = useSelector((store) => store.myStore.allImageData);
  const dispatch = useDispatch()
  const handleClick = (img)=>{
    dispatch(addDetailImage(img))
  }
  if (result.length < 1) return;
  
  return (
    <div className="ResultPage backdrop-blur-md ">
      <div>
        <Buttons />
      </div>
      <div className="pt-20 flex mx-4 justify-center flex-wrap">
        {result.map((img) => (
          <img src={img.largeImageURL} alt="myImage" key={img.id} className="w-[20rem] mx-5 my-4 rounded-lg cursor-pointer hover:scale-90 transition duration-300 ease-in-out hover:border-pink-600 border-2" onClick={()=>handleClick(img)}/>
        ))}
      </div>
    </div>
  );
};

export default ResultPage;
