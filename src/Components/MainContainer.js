import React from "react";
import HomePage from "./HomePage/HomePage";
import ResultPage from "./ResultPage/ResultPage";
import PopupPage from "./PopupPage/PopupPage";
import Login from "./LoginSignUp/Login";
import { useSelector } from "react-redux";
const MainContainer = () => {
  const login = useSelector((store)=>store.myStore.loginSignup)
  return (
    <div className="maincontainer">
      {login ? (
        <Login />
      ) : (
        <>
          <HomePage />
          <ResultPage />
          <PopupPage />
        </>
      )}
    </div>
  );
};

export default MainContainer;
