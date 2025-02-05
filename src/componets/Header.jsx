import React from 'react'
import logo from '../assests/logo.jpg'
import { Link } from 'react-router-dom'
import { IoCartOutline } from "react-icons/io5";
import { FcLike } from "react-icons/fc";
import { MdLogin } from "react-icons/md";

const Header = () => {
  return (
    <>
      <nav className='w-screen flex items-center justify-between px-20'>
        <img className='h-[8vw]' src={logo} alt="" />
        <div>
          <input className='w-[30vw] bg-zinc-100 px-5 py-2 outline-0 rounded-full' type = "search"  placeholder='Search for products and more'/>
        </div>
        <div className='flex gap-6'>
          <h4 className='flex items-center gap-1'>Cart <IoCartOutline /> </h4>
          <h4 className='flex items-center gap-1'>Wishlist <FcLike /></h4>
          <h4 className='flex items-center gap-1'>Login <MdLogin /></h4>
        </div>
      </nav>
    </>
  )
}

export default Header