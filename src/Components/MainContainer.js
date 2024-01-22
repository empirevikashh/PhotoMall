import React, { useEffect } from "react";
import HomePage from "./HomePage/HomePage";
import ResultPage from "./ResultPage/ResultPage";
import PopupPage from "./PopupPage/PopupPage";
import Login from "./LoginSignUp/Login";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { addAllImageData, toggleIsUserLogged } from "../Utils/appSlice";
const MainContainer = () => {
  const login = useSelector((store)=>store.myStore.loginSignup);
  const imageData = useSelector((store)=>store.myStore.allImageData);
  console.log(imageData);

  const dispatch = useDispatch();

  // For store user data
  useEffect(() => {
    const unsbscribe = onAuthStateChanged(auth, (user) => {
       if (user) {
        dispatch(addAllImageData(imageData));
        dispatch(toggleIsUserLogged());
       } 
       else {
       console.log("User dose'nt exist");
       }
     });
 
     // Unsubscribe when component unmounts
     return ()=>unsbscribe();
     // eslint-disable-next-line
   }, []);

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
