import React from 'react'

const Header = () => {
  return (
    <div className='header flex justify-between items-center px-6 mx-8 py-2 my-6 rounded-sm backdrop-blur-sm ring ring-[#8E8CA3] font-semibold'>
        <div>
            Homepage
        </div>
        <div>
            <button className='hover:bg-white hover:text-black transition duration-300 ease-in-out rounded-lg px-1'>Login</button>
            <button className='ml-4 border-2 border-white p-1 rounded-lg hover:bg-white hover:text-black transition duration-300 ease-in-out'>Create Account</button>
        </div>
    </div>
  )
}

export default Header