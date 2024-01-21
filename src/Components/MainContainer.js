import React from 'react'
import HomePage from "./HomePage/HomePage";
import ResultPage from './ResultPage/ResultPage';
import PopupPage from './PopupPage/PopupPage';
const MainContainer = () => {
  return (
    <div className='maincontainer'>
        <HomePage />
        <ResultPage/>
        <PopupPage/>
    </div>
  )
}

export default MainContainer