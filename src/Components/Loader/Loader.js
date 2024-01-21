import React from "react";
import BeatLoader from "react-spinners/BeatLoader";
import FadeLoader from "react-spinners/FadeLoader";

function Loader() {
  return (
    <>
      <BeatLoader color="rgb(133 209 229)" size={12} />
    </>
  );
}

export function ScreenLoader() {
  return (
    <div className="w-full h-full absolute top-0 backdrop-blur-[1px]">
      <div className="absolute top-2/4 left-2/4 ">
        <FadeLoader color="red" height={23} speedMultiplier={2} width={6} />
      </div>
    </div>
  );
}

export default Loader;
