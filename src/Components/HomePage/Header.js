import React from 'react'

const Header = () => {
  return (
    <div className='header flex justify-between items-center px-6 mx-8 py-2 my-6 rounded-sm backdrop-blur-sm ring ring-[#8E8CA3] font-semibold'>
        <div>
            Homepage
        </div>
        <div>
            <button>Login</button>
            <button className='ml-4 border-2 border-white p-1 rounded-lg'>Create Account</button>
        </div>
    </div>
  )
}

export default Header