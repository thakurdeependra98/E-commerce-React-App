import React from 'react'
import logo from '../assests/logo.png'
import { Link } from 'react-router-dom'
import { IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { FiLogIn } from "react-icons/fi";

const Header = ({isAuth, logoutHandler}) => {
  return (
    <>
      <nav className='w-screen flex items-center justify-between px-10 absolute'>
        <img className='h-[10vw]' src={logo} alt="" />
        <div>
          <input className='w-[30vw] bg-white px-5 py-2 outline-0 rounded-full' type = "search"  placeholder='Search for products and more'/>
        </div>
        <div className='flex gap-8 mr-20'>
          <Link to= "/cart"><h4 className='flex items-center gap-2 text-[1.2vw] font-normal hover:text-[#4f4f4f]'>Cart </h4></Link>
          <Link to ='/wishlist' ><h4 className='flex items-center gap-2 text-[1.2vw] font-normal hover:text-[#4f4f4f]'>Wishlist </h4></Link>

          {!isAuth ? (<Link to= "/login"><h4 className='flex items-center gap-2 text-[1.2vw] font-normal hover:text-[#4f4f4f]'>Login</h4></Link> ): (<Link to= "/"><h4 onClick={logoutHandler} className='flex items-center gap-2 text-[1.2vw] font-normal hover:text-[#4f4f4f]'>Logout</h4></Link>)}
        </div>
      </nav>
    </>
  )
}

export default Header