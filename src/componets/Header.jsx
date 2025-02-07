import React from 'react'
import logo from '../assests/logo.png'
import { Link } from 'react-router-dom'
import Profile from './Profile'

const Header = ({isAuth, logoutHandler}) => {
  return (
    <>
      <nav className='w-full flex items-center justify-between px-10 absolute'>
        <img className='h-[10vw]' src={logo} alt="" />
        <div>
          <input className='w-[30vw] bg-white px-5 py-2 outline-0 rounded-full' type = "search"  placeholder='Search for products and more'/>
        </div>
        <div className='flex gap-8 mr-20 items-center'>
          <Link to= "/cart"><h4 className='flex items-center gap-2 text-[1.2vw] font-normal hover:text-[#4f4f4f]'>Cart </h4></Link>
          <Link to ='/wishlist' ><h4 className='flex items-center gap-2 text-[1.2vw] font-normal hover:text-[#4f4f4f]'>Wishlist </h4></Link>

          {!isAuth ? (<Link to= "/login"><h4 className='flex items-center gap-2 text-[1.2vw] font-normal hover:text-[#ebebeb] bg-blue-700 px-3 py-1 rounded text-white'>Login</h4></Link> ): (<Link to= "/"><h4 onClick={logoutHandler} className='flex items-center gap-2 text-[1.2vw] text-white font-normal hover:text-[#f1f1f1] bg-red-600 px-3 py-1 rounded'>Logout</h4></Link>)}
        </div>
      </nav>
    </>
  )
}

export default Header