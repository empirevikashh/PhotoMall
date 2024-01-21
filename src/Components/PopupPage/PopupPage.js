import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDetailImage } from "../../Utils/appSlice";

const PopupPage = () => {
  const detailImage = useSelector((store) => store.myStore.detailImage);
  const dispatch = useDispatch();

  if(!detailImage)return
  return (
    <div className="fixed w-[80%] bg-white rounded-[8.89px] shadow text-black top-1/2 left-1/2 transform translate-x-[-50%] -translate-y-[50%] transition-all duration-1000 ease-in-out ">
      <div className="PoppupHead flex justify-between bg-[#F5F5F5] px-6 py-4">
        <h1> Preview ID: 4877</h1>
        <h1 className="border border-black px-2 pt-0 pb-1 rounded-md font-semibold cursor-default hover:bg-red-500 hover:scale-90 transition duration-100" onClick={()=>dispatch(addDetailImage(null))}>
          x
        </h1>
      </div>

      {/* Middile part */}
      <div className="midPart px-6 py-4 sm:flex justify-evenly">
        <div className="w-2/3 mr-2">
          <img
            src={detailImage.webformatURL}
            alt="clickedPic"
            className="rounded-md w-full"
          />
        </div>
        <div className="imageDetail w-[16rem]">
          <h2 className="font-semibold mb-1">Downlod</h2>

          {/* Size box */}
          <div className="sizeBox border border-gray-200 pt-1 text-sm">
            <div>
              <p>Small</p>
              <p className="font-semibold">640x960</p>
              <input type="checkbox" />
            </div>
            <div>
              <p>Medium</p>
              <p className="font-semibold">640x960</p>
              <input type="checkbox" />
            </div>
            <div>
              <p>Big</p>
              <p className="font-semibold">640x960</p>
              <input type="checkbox" />
            </div>
            <div>
              <p>Original</p>
              <p className="font-semibold">640x960</p>
              <input type="checkbox" />
            </div>
          </div>
          <button className="bg-[#4BC34B] py-2 w-full text-white font-semibold hover:text-black">
            Download for free!
          </button>
          {/* User information */}
          <div className="info text-sm">
            <h1 className="py-2 text-lg font-semibold">Information</h1>
            <div className="imageInfo flex justify-between">
              <div className="infoChild">
                <p>user</p>
                <p className="font-semibold">{detailImage.user}</p>
              </div>
              <div className="infoChild">
                <p>userID</p>
                <p className="font-semibold">{detailImage.user_id}</p>
              </div>
              <div className="infoChild">
                <p>Type</p>
                <p className="font-semibold">{detailImage.type}</p>
              </div>
            </div>
            <div className=" flex justify-between">
              <div className="infoChild">
                <p>Views</p>
                <p className="font-semibold">{detailImage.type}</p>
              </div>
              <div className="infoChild">
                <p>Downloads</p>
                <p className="font-semibold">{detailImage.downloads}</p>
              </div>
              <div className="infoChild">
                <p>Likes</p>
                <p className="font-semibold">{detailImage.likes}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupPage;
