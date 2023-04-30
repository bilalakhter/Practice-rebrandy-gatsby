import React from 'react'
import "./index.css"
function Menu() {
  return (
    <div >
        <ul className='flex w-[100%] justify-between items-center'>
            <li className='text-base mr-[3rem] hover:cursor-pointer'><a href="#home">Home</a></li>
            <li className='text-base mr-[3rem] hover:cursor-pointer'><a href="#about">ABout</a></li>
            <li className='text-base mr-[3rem] hover:cursor-pointer'><a href="#features">Features</a></li>
            <li className='text-base mr-[3rem] hover:cursor-pointer'><a href="#blog">Blog</a></li>
            <li className='text-base mr-[3rem]'>
            <button className= "bg-gradient-to-r from-green-500 to-teal-500 hover:from-purple-500 hover:to-pink-500 text-white font-poppins-semibold py-2 px-2 border border-transparent rounded-md shadow-sm" >
          Download App
        </button>
      </li>
        </ul>
    </div>
  )
}

export default Menu