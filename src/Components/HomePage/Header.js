import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleIsUserLogged, toggleLoginSignUp } from "../../Utils/appSlice";
import { signOut } from "firebase/auth";
import { auth } from "../../Utils/firebase";

const Header = () => {
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(toggleLoginSignUp());
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(toggleIsUserLogged());
        setTimeout(()=>window.alert("Logout Successfully"),200)
        
      })
      .catch((error) => {
        console.log(error, "signOut Error");
      });

  };
  const userSignOut = useSelector((store) => store.myStore.isUserLogged);
  return (
    <div className="header flex justify-between items-center px-6 mx-8 py-4 my-6 rounded-sm backdrop-blur-sm ring ring-[#8E8CA3] font-semibold">
      <div>Homepage</div>
      <div>
        {userSignOut ? (
          <>
            <button
              onClick={handleLogin}
              className="hover:bg-white hover:text-black transition duration-300 ease-in-out rounded-lg px-1"
            >
              Login
            </button>
            <button
              onClick={handleLogin}
              className="ml-4 border-2 border-white p-1 rounded-lg hover:bg-white hover:text-black transition duration-300 ease-in-out"
            >
              Create Account
            </button>
          </>
        ) : (
          <div
            className="ml-4 border-2 border-white p-1 rounded-lg hover:bg-white hover:text-black transition duration-300 ease-in-out"
            onClick={handleSignOut}
          >
            <button className="font-semibold">Logout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
