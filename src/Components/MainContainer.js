import React from 'react'
import HomePage from "./HomePage/HomePage";
import ResultPage from './ResultPage/ResultPage';
const MainContainer = () => {
  return (
    <div className='maincontainer'>
        <HomePage />
        <ResultPage/>
    </div>
  )
}

export default MainContainer