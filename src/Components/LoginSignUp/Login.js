import React, { useRef, useState } from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../Utils/firebase";
import { useDispatch } from "react-redux";
import Loader from "../Loader/Loader";
import { cheakValidate } from "../../Utils/cheakValidate";
import { toggleIsUserLogged, toggleLoginSignUp } from "../../Utils/appSlice";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  //   I want to create the refrence of my input that's why i'm using useRef
  const Name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmit = () => {
    const error = cheakValidate(email.current.value, password.current.value);
    // console.log(email.current.value, password.current.value);
    setErrorMsg(error);

    if (error !== null) return; //if error is not null then there is some issue

    if (isSignIn) {
      // sign up logic
      setLoading(true);
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: Name.current.value,
          })
            .then(() => {
              // Profile updated!
              // eslint-disable-next-line
              const { uid, email, displayName } = auth.currentUser;
              // console.log(uid, email, displayName);
              dispatch(toggleIsUserLogged());
              dispatch(toggleLoginSignUp());

              setTimeout(() => {
                window.alert("SignUp Successfully!");
              }, 200);
            })
            .catch((error) => {
              setErrorMsg(error);
            });
          // console.log(user, " createUserWithEmailAndPassword");
          setLoading(false);
        })
        .catch((error) => {
          setLoading(true);
          const errorCode = error.code;
          const errorMessage = error.message;
          // console.log(error, "..", errorCode, "..", errorMessage, " Login1");
          setErrorMsg(errorCode, errorMessage);
          setLoading(false);
        });
    } else {
      // sign in logic
      setLoading(true);
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          // eslint-disable-next-line
          const user = userCredential.user;
          // console.log(user);
          dispatch(toggleIsUserLogged());
          dispatch(toggleLoginSignUp());
          setLoading(false);
          setTimeout(() => {
            window.alert("Login Successfully!");
          }, 200);
        })
        .catch((error) => {
          // console.log(error, " login2");
          setLoading(true);
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorMessage + " " + errorCode);
          setLoading(false);
        });
    }
  };

  return (
    <div className="login">
      <div className="logo pt-10 w-full bg-gradient-to-b from-black text-3xl">
        <h1 className="text-3xl relative top-[-2rem] ml-6">Photo MAll</h1>
      </div>

      <div className="loginForm absolute top-[50%] left-1/2 p-6 backdrop-blur-sm ring ring-[#8E8CA3] transform -translate-x-1/2 -translate-y-1/2 sm-max430:p-6">
        <h1 className=" text-3xl mb-2 font-semibold">
          {isSignIn ? "Sign Up " : "Sign In "}
        </h1>
        <form
          className="flex flex-col w-full mr-40 sm-max430:mr-16"
          onSubmit={(e) => e.preventDefault()}
        >
          {isSignIn && (
            <input
              ref={Name}
              type="text"
              placeholder="Full Name"
              className={
                "my-2 py-3 p-2 rounded-md  bg-[#333333] focus:outline-none "
              }
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email or phone number"
            className={
              "my-2 py-3 p-2 rounded-md  bg-[#333333] focus:outline-none "
            }
          />
          <input
            ref={password}
            type="text"
            placeholder="Password"
            className={
              "my-2 py-3 p-2 rounded-md  bg-[#333333] focus:outline-none "
            }
          />
          <p className="text-red-600 font-semibold">{errorMsg}</p>
          <button
            type="submit"
            className="bg-white text-black p-2 text-lg mt-8 font-semibold rounded-md hover:bg-blue-500 transition duration-300 ease-in-out"
            onClick={handleSubmit}
          >
            {loading ? <Loader /> : isSignIn ? "Sign Up " : "Login"}
          </button>
        </form>
        <div className=" flex justify-between my-2">
          <p>
            <input type="checkbox" id="cheak" />
            <label htmlFor="cheak"> Remember me</label>
          </p>
          <p className="cursor-pointer hover:underline">Need help?</p>
        </div>
        <p className=" my-2">
          <span className="text-[#9c9797]">
            {isSignIn
              ? "I already have an account?"
              : "Don't have an account yet?"}{" "}
          </span>
          <span
            className="cursor-pointer hover:underline"
            onClick={() => setIsSignIn(!isSignIn)}
          >
            {isSignIn ? "Sign In now" : "Sign up now"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
